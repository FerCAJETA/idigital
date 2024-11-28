<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Logo y Home -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/img/logo.png" alt="IDigital Logo" height="40" class="me-2">
      </router-link>

      <!-- Toggler para pantallas pequeñas -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- Enlaces de navegación -->
          <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="link.path" class="nav-link">{{ link.label }}</router-link>
          </li>

          <!-- Botones de Sign In y Sign Up -->
          <li class="nav-item ms-2">
            <router-link to="/signin" class="btn btn-outline-primary px-3 py-2 rounded-pill">Sign In</router-link>
          </li>
          <li class="nav-item ms-2">
            <router-link to="/signup" class="btn btn-primary px-3 py-2 rounded-pill">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      links: [
        { name: 'About', path: '/about', label: 'About' },
        { name: 'IDigital', path: '/credential', label: 'IDigital' },
        { name: 'QRService', path: '/qrservice', label: 'QR Service' },
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar .navbar-brand {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.navbar .navbar-toggler {
  border: none;
}

.navbar .navbar-nav .nav-link {
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar .navbar-nav .nav-link:hover {
  color: #007bff;
}

.navbar .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.navbar .btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
}

.navbar .btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

/* Ajustes para pantallas pequeñas */
.navbar-nav {
  gap: 10px;
}

body {
  overflow-x: hidden; /* Previene desplazamiento horizontal */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%280,0,0,.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
