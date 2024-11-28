<template>
    <!-- credencial -->
    <div class="credential-wrapper">
      <div class="credential-container mt-5">
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
  }
  
  /* Encabezado */
  .header {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      background-color: #fff;
      padding: 15px; /* Aumentamos el padding en el encabezado */
  }
  
  .header img {
      height: 50px; /* Aumentamos el tamaño de las imágenes del encabezado */
      width: auto;
      margin: 0 15px; /* Aumentamos el espacio entre las imágenes */
  }
  
  /* Cuerpo */
  .body {
      display: flex;
      flex: 1; /* Esto hace que ocupe el espacio disponible */
      margin-bottom: 20px; /* Reduce espacio extra entre la sección de foto y la información */
  }
  
  .photo-section {
      width: 40%; /* Hacemos que la foto ocupe un 40% del espacio */
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      padding: 15px; /* Aumentamos el padding */
  }
  
  .profile-photo {
      width: 150px; /* Aumentamos el tamaño de la foto */
      height: 150px;
      border-radius: 10%;
      border: 3px solid #004080;
  }
  
  .info-section {
      width: 60%; /* La información ocupa el 60% del espacio */
      padding: 20px; /* Aumentamos el padding para que se vea más espacioso */
      font-size: 16px; /* Aumentamos el tamaño de la fuente */
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: #004080;
  }
  
  .info-section h2 {
      font-size: 18px; /* Aumentamos el tamaño del título */
      margin-bottom: 10px;
      color: #000;
  }
  
  .info-section p {
      margin: 5px 0; /* Aumentamos el margen entre párrafos */
      font-size: 15px; /* Aumentamos el tamaño de la fuente */
      line-height: 1.6;
      color: #000;
  }
  
  /* Sección de código de barras */
  .barcode {
      margin-top: 15px; /* Aumentamos el espacio entre la información */
      text-align: center;
      border: 1px solid black;
      padding: 10px; /* Aumentamos el padding */
      border-radius: 5px;
      display: inline-block;
  }
  
  .barcode p {
      font-size: 14px; /* Aumentamos el tamaño del texto */
      margin-bottom: 8px;
      font-weight: bold;
      color: #000;
  }
  
  .barcode img {
      width: 250px; /* Aumentamos el tamaño de la imagen del código de barras */
      height: auto;
  }
  
  /* Pie de página */
  .footer {
      text-align: center;
      font-weight: bold;
      font-size: 18px; /* Aumentamos el tamaño del texto del pie de página */
      background-color: #004080;
      color: #ffffff;
      padding: 15px;
      width: 100%; /* Asegura que el footer ocupe todo el ancho */
      margin-top: auto; /* Empuja el footer hacia el fondo */
  }
  </style>
  