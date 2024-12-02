<template>
  <!-- Credencial -->
  <div class="credential-wrapper">
    <div class="credential-container">
      <!-- Imagen de fondo -->
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
            <img src="@/assets/img/barra.png" alt="Código de barras">
            <p>2302017</p>
          </div>
        </div>
      </div>

      <!-- Pie de página -->
      <div class="footer">
        <p>STUDENT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppIdigital',
};
</script>

<style scoped>
/* Importar fuentes */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

/* Variables de color */
:root {
  --primary-color: #004080;
  --secondary-color: #ffffff;
  --text-color: #333333;
  --background-color: #f8f9fa;
}

/* General */
body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

/* Contenedor principal */
.credential-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
}

.credential-container {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 2 / 3;
  border: 8px solid #004080; 
  border-radius: 10px;
  position: relative;
  background-color: var(--secondary-color);
  overflow: hidden;
}

/* Fondo (Jaguar) */
.background-image {
  background-image: url("@/assets/img/jag.png");
  background-size: 50%;
  background-position: bottom right;
  background-repeat: no-repeat;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Encabezado */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.header img {
  height: 40px;
  margin: 0 5px;
}

/* Cuerpo */
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 15px;
}

/* Sección de foto */
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 3px solid var(--primary-color);
  object-fit: cover;
}

/* Sección de información */
.info-section {
  text-align: center;
  color: var(--text-color);
}

.info-section h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.info-section p {
  font-size: 14px;
  line-height: 1.4;
}

/* Código de barras */
.barcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  background-color: var(--background-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
}

.barcode img {
  width: 80%;
  height: auto;
  margin-top: 5px;
}

.barcode p {
  font-size: 14px;
  font-weight: bold;
  color: var(--text-color);
}

/* Pie de página */
.footer {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 5px 0;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .credential-container {
    max-width: 90%;
    aspect-ratio: 2 / 3;
  }

  .profile-photo {
    width: 80px;
    height: 80px;
  }

  .info-section h2 {
    font-size: 16px;
  }

  .info-section p {
    font-size: 12px;
  }

  .barcode img {
    width: 70%;
  }

  .footer {
    font-size: 12px;
  }
}
</style>
