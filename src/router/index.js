// Importa los módulos necesarios de Firebase Authentication y Vue Router.
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import AppForm from "../components/contact.vue";
import HomePage from "../components/homepage.vue";
import AppAbout from "../components/about.vue";
import AppIdigital from "../components/idigital.vue";
import AppQrservice from "../components/qrservice.vue";
import AppSignIn from "../components/signin.vue";
import RegisterForm from "../components/RegisterForm.vue";

// Define las rutas de tu aplicación.
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // Usa 'HomePage' en lugar de 'App'
  },
  {
    path: "/about",
    name: "About",
    component: AppAbout,
  },
  {
    path: "/credential",
    name: "idigital",
    component: AppIdigital,
    meta: {
      requiresAuth: true, // Ruta protegida
    },
  },
  {
    path: "/qrservice",
    name: "qrservice",
    component: AppQrservice,
    meta: {
      requiresAuth: true, // Ruta protegida
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: AppSignIn,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
  {
    path: "/contact",
    name: "Contact",
    component: AppForm,
  },
];

// Función que obtiene al usuario autenticado actual.
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      (error) => {
        removeListener();
        reject(error);
      }
    );
  });
};

// Configuración del enrutador.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware global para proteger rutas que requieren autenticación.
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const user = await getCurrentUser();
      if (user) {
        next(); // Si hay usuario autenticado, permite el acceso.
      } else {
        alert("You don't have access!");
        next("/signin"); // Redirige a la página de inicio de sesión.
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
      next("/signin");
    }
  } else {
    next(); // Permite el acceso si no requiere autenticación.
  }
});

export default router;
