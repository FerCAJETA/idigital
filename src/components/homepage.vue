<template>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>IDigital</title>

  <!-- Enlace a Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <!-- Enlace a Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</head>

    <div>
      <!-- Video -->
      <div class="vidcont">
        <video class="video" src="@/assets/img/5386293-hd_1080_2048_30fps.mp4" autoplay muted loop></video>
        <div class="txt">
          <h1>Welcome to IDigital!</h1>
          <p>Education is the best key to success in life</p>
        </div>
      </div>
  
<!-- Cards -->
<div class="container py-5 text-center">
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card">
                <i class="fas fa-id-card"></i>
                <h5 class="cardtitle">Own ID</h5>
                <p class="cardtext">Generate a digital school credential</p>
                <p class="cardescondido">Create and manage your digital ID with all the necessary information.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <i class="fas fa-qrcode"></i>
                <h5 class="cardtitle">QR Code</h5>
                <p class="cardtext">Generate QR code to make everything easier</p>
                <p class="cardescondido">Generate and manage QR codes for easy access to your school info.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <i class="fas fa-folder"></i>
                <h5 class="cardtitle">Data Student</h5>
                <p class="cardtext">Upload and manage your student information</p>
                <p class="cardescondido">Organize and update all your student details from one place.</p>
            </div>
        </div>
    </div>
</div>
      <!-- Separador -->
      <div class="separator"></div>
  
      <!-- Información -->
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="section-title">What is IDigital?</h2>
            <p class="section-description mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi delectus autem nam amet ullam
              corrupti omnis numquam ipsum excepturi animi ex est rem sint, voluptas accusantium.
            </p>
            <a href="#" class="btn btn-learn-more mt-4">Learn more &rarr;</a>
          </div>
          <div class="col-md-6">
            <div class="row g-3">
              <div class="col-12">
                <img src="@/assets/img/personas.jpg" alt="biblio" class="img-fluid rounded" />
              </div>
              <div class="col-6">
                <img src="@/assets/img/graduacion.jpg" alt="graduacion" class="img-fluid rounded" />
              </div>
              <div class="col-6">
                <img src="@/assets/img/salon de clases.jpg" alt="salon" class="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  
  </script>
  <style scoped>
  .vidcont {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
  
  .txt h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  
  .txt p {
    font-size: 1.5rem;
  }
  
/* Cards */
.card {
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden; /* hace que el texto extra no se vea fuera de la card */
    background-color: #fff;
    height: 240px; /* Ajuste para el tamaño fijo de las cards */
    padding: 1rem;
    text-align: center;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Título de la tarjeta */
.cardtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
}

/* Estilo de los íconos dentro de la card */
.card i {
    font-size: 3rem;
    color: #007bff; /* Color del ícono */
    margin-bottom: 1rem;
}

/* Texto visible que aparece siempre */
.cardtext {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 1rem;
    z-index: 2; /* Asegura que el texto visible esté encima */
    transition: opacity 0.3s ease; /* Suaviza el cambio de visibilidad */
}

/* Texto oculto que aparece al hacer hover */
.cardescondido {
    font-size: 1.125rem;
    color: #555;
    opacity: 0; /*texto está oculto por defecto */
    transition: opacity 0.3s ease;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 1; /* texto oculto esté debajo del texto visible */
    text-align: center;
}

/* hover para el texto oculto cuando el cursor pasa sobre la card */
.card:hover .cardescondido {
    opacity: 1; /* Hace que el texto oculto sea visible cuando el cursor pasa sobre la card */
}

/* Hace que el texto visible desaparezca al pasar el cursor */
.card:hover .cardtext {
    opacity: 0; /* Hace que el texto visible desaparezca */
}

  
  .separator {
    height: 60px;
    background-color: #001f54;
    margin: 40px 0;
    width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .section-description {
    font-size: 1.2rem;
  }
  
  .btn-learn-more {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .btn-learn-more:hover {
    background-color: #0056b3;
  }
  
  img {
    border-radius: 8px;
  }

  /* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  /* Ajuste del contenedor de texto en el video */
  .txt h1 {
    font-size: 2rem;
  }

  .txt p {
    font-size: 1rem;
  }

  /* Espaciado entre las columnas */
  .row.align-items-center {
    flex-direction: column; /* Cambia disposición a columna en pantallas pequeñas */
  }

  .col-md-6 {
    margin-bottom: 20px; /* Agrega espacio extra entre secciones */
  }

  /* Botón Learn More centrado */
  .btn-learn-more {
    display: block;
    margin: 20px auto;
    max-width: 200px;
  }

  /* Ajustes para imágenes */
  img {
    width: 100%; /* Se asegura que las imágenes sean responsivas */
    height: auto;
  }
}

/* Ajustes para pantallas extra pequeñas */
@media (max-width: 576px) {
  .txt h1 {
    font-size: 1.5rem; /* Reduce tamaño del título */
  }

  .txt p {
    font-size: 0.9rem; /* Reduce tamaño del subtítulo */
  }

  .col-6 img {
    margin-bottom: 10px; /* Espaciado adicional entre imágenes */
  }
}
  </style>
  