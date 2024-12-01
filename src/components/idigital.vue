<template>
  <!-- credencial -->
  <div class="credential-wrapper">
    <div class="credential-container mt-5">
      <div class="background-image"></div>
      <!-- Encabezado -->
      <div class="header">
        <img src="@/assets/img/logoC1.png" alt="Logo 1">
        <img src="@/assets/img/logoC2.png" alt="Logo 2">
        <img src="@/assets/img/logoC3.png" alt="Logo 3">
      </div>

      <!-- Cuerpo -->
      <div class="body">
        <!-- Sección de foto -->
        <div class="photo-section">
          <div class="left-image">
            <img src="../assets/img/manchas.png" alt="Imagen de lado izquierdo">
          </div>
          
          <img src="@/assets/img/perfil.png" alt="Foto de perfil" class="profile-photo">
        </div>

        <!-- Sección de información -->
        <div class="info-section">
          
          <h2>Matías Valdés José Ignacio</h2>
          <p><strong>Núm. Seguro Social:</strong> 68200572888</p>
          <p>TSU en Tecnologías de la Información,</p>
          <p>Área Desarrollo de Software Multiplataforma</p>

          <!-- Sección de código de barras -->
          <div class="barcode">
            <p>2302017</p>
            <img src="@/assets/img/barra.png" alt="Código de barras">
          </div>
        </div>
      </div>

      <!-- Pie de página -->
      <div class="footer">
        <p>STUDENT</p>
      </div>
    </div>
  </div>
  <!-- fin credencial -->
</template>

<script>
export default {
  name: 'AppIdigital',
};
</script>

<style scoped>
/* Las reglas de estilo van aquí */
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
}

/* credencial */
/* Contenedor principal */
.credential-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    min-height: 100vh; /* Asegura que ocupe toda la pantalla */
}

/* Ajuste para la credencial */
.credential-container {
    width: 800px; /* Aumentamos el tamaño del contenedor */
    height: 450px; /* Aumentamos la altura del contenedor */
    border: 2px solid #004080;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 20px; /* Aumentamos el padding */
    position: relative; /* Necesario para el pie de página */
}

/* Encabezado */
.header {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #fff;
    padding: 15px; 
}

.header img {
    height: 50px; 
    width: auto;
    margin: 0 15px; 
}


.body {
    display: flex;
    flex: 1; 
    margin-bottom: 20px; 
}

.photo-section {
    width: 40%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 15px; 
}
.left-image {
    margin-right: 15px; /* Agrega un pequeño espacio entre las imágenes */
}

.left-image img {
    width: 60px; /* Ajusta el tamaño de la nueva imagen */
    height: auto;
    border-radius: 10%;
}

.profile-photo {
    width: 150px; 
    height: 150px;
    border-radius: 10%;
    border: 3px solid #004080;
}

.info-section {
    width: 60%; 
    padding: 20px; 
    font-size: 16px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #004080;
    position: relative;
}
.background-image {
    background-image: url('../assets/img/jag.png');
    background-size: auto 50%; 
    background-position: bottom right; 
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 700px; 
    height: 700px;
}

.info-section h2 {
    font-size: 18px; 
    margin-bottom: 10px;
    color: #000;
}

.info-section p {
    margin: 5px 0; 
    font-size: 15px;
    line-height: 1.6;
    color: #000;
}

/* Sección de código de barras */
.barcode {
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    display: inline-block;
}

.barcode p {
    font-size: 14px; 
    font-weight: bold;
    color: #000;
}

.barcode img {
    width: 250px; 
    height: auto;
    margin-bottom: 10px;
}

/* Pie de página */
.footer {
    position: absolute; 
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 18px; 
    background-color: #004080;
    color: #ffffff;
    padding: 1px;
}
</style>
