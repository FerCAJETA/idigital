<template>
  
  <div>
    <AppNavbar /> <!-- Barra de navegación común -->
    <router-view /> <!-- Aquí se renderiza la página de acuerdo con la ruta, por ejemplo, HomePage -->
    <AppFooter /> <!-- Pie de página común -->
  </div>
</template>

<script>
import AppNavbar from './components/navbar.vue';
import AppFooter from './components/footer.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>
