import { createApp } from 'vue';
import App from './App.vue';
import AppNavbar from './components/navbar.vue';
import AppFooter from './components/footer.vue';
import router from './router';  // Importa el router desde router/index.js

// Estilos y scripts de Bootstrap y FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa Firebase y su configuración
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAWzGzAma38MR8WymYlItx4EtLdAw7gv6c",
    authDomain: "login-628e2.firebaseapp.com",
    projectId: "login-628e2",
    storageBucket: "login-628e2.firebasestorage.app",
    messagingSenderId: "482730017172",
    appId: "1:482730017172:web:6f750df0c644f253898f81"
};

// Inicializa Firebase
initializeApp(firebaseConfig);

// Configuración de Vue
const app = createApp(App);

// Registra los componentes globales
app.component('AppNavbar', AppNavbar);
app.component('AppFooter', AppFooter);

// Usa el router
app.use(router);

// Monta la aplicación en el DOM
app.mount('#app');
