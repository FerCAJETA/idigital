<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>IDigital</title>

    <!-- Enlace a Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <!-- Enlace a Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  </head>

  <footer class="footersintop">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5><i class="fa-solid fa-graduation-cap"></i> School</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <p><i class="fa-solid fa-location-dot"></i> Solidaridad, Playa Del Carmen, QROO, MX</p>
          <p><i class="fa-regular fa-envelope"></i> IDigital@gmail.com</p>
          <p><i class="fa-solid fa-phone-volume"></i> 9841570489</p>
        </div>
        <div class="col-md-4">
          <h5>Find Us on Google Map</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=...your_map_url..."
            width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <div class="copyright text-center py-3">
      &copy; IDigital <span id="year"></span> All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter', 
};
</script>

<style scoped>
.footersintop {
  background-color: #001f54;
  padding: 40px 0;
  margin-top: 0 !important; /* Eliminar el margen superior de bootstrap defecto */
}

.footersintop h5 {
  font-weight: bold;
  color: #f1c40f;
}

.footersintop p {
  color: #ffffff;
  font-size: 0.9rem;
}

.footersintop .social-icons {
  margin-top: 10px;
}

.footersintop .social-icon {
  color: #ffffff;
  margin-right: 10px;
  font-size: 1.5rem;
  text-decoration: none;
}

.footersintop .social-icon:hover {
  color: #f1c40f;
}

.footersintop .copyright {
  background-color: #003080;
  color: white;
  font-size: 0.8rem;
}

.footersintop .copyright a {
  color: white;
  text-decoration: none;
}

.footersintop .copyright a:hover {
  text-decoration: underline;
}
</style>
