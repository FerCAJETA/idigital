import { createApp } from 'vue';
import App from './App.vue';
import AppNavbar from './components/navbar.vue';
import AppFooter from './components/footer.vue';
import router from './router';  // Importa el router desde router/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);

app.component('AppNavbar', AppNavbar);
app.component('AppFooter', AppFooter);

// Usa Vue Router importado desde index.js
app.use(router);

// Monta la aplicación en el DOM
app.mount('#app');
