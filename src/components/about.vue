<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IDigital</title>

    <!-- Enlace a Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <!-- Enlace a Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  </head>

  <div class="page-container">
    <div class="background-container">
      <video autoplay muted loop class="video-background">
        <source src="@/assets/img/fondoAbout.mp4" type="video/mp4">
      </video>
      <div class="text-overlay">
        <h1>What is IDigital</h1>
        <p>
          We made IDigital to provide you a portable ID that speaks for you and allows you to have access to your
          work areas,
          study areas and training areas, there is no limitation.
        </p>
        <p>
          Feel the experience of being able to easily identify yourself and ensure your participation in your day
          to
          day work.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppAbout',
  };
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

/* Variables de color */
:root {
  --primary-color: #001f54;
  --secondary-color: #ffffff;
  --hover-color: #e74c3c;
  --separator-color: #001f54;
  --background-color: #f8f9fa;
}

/* General */
body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: #333;
  margin: 0;
  padding: 0;
  height: 100%;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

/* Background Video Container */
.background-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Hace que el video ocupe toda la pantalla */
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Esto asegura que el video cubra toda la pantalla sin deformarse */
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  z-index: 1;
}

.text-overlay h1 {
  margin: 0 0 20px;
  font-size: 3rem; 
  font-weight: bold;
}

.text-overlay p {
  margin: 10px 0;
  font-size: 1.5rem; 
  line-height: 1.6;
  max-width: 800px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .text-overlay h1 {
    font-size: 2rem; 
  }

  .text-overlay p {
    font-size: 1.1rem; 
    max-width: 90%; 
  }
}

@media (max-width: 576px) {
  .text-overlay h1 {
    font-size: 1.5rem; 
  }

  .text-overlay p {
    font-size: 1rem; 
  }
}

</style>
