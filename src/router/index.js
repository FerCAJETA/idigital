import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/homepage.vue';  // Importa el componente correcto
import AppAbout from '../components/about.vue';  // El componente 'About'
import AppIdigital from '../components/idigital.vue';
import AppQrservice from '../components/qrservice.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Usa 'HomePage' en lugar de 'App'
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout,
  },
  {
    path: '/credential',
    name: 'idigital',
    component: AppIdigital,
  },
  {
    path: '/qrservice',
    name: 'qrservice',
    component: AppQrservice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
