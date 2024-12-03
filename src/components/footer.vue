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
          <p class="uni">Universidad Tecnológica de la Riviera Maya</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/utrivieramaya.bis/profilecard/?igsh=aXd2cWR2d2poc21j" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/1X6ZWLS7GR/?mibextid=LQQJ4d" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/ut_rivieramaya?s=21" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <p><i class="fa-solid fa-location-dot"></i> Solidaridad, Playa Del Carmen, QROO, MX</p>
          <p><i class="fa-regular fa-envelope"></i> id_digitalrm@outlook.com</p>
          <p><i class="fa-solid fa-phone-volume"></i> 9841570489</p>
        </div>
        <div class="col-md-4">
          <h5>Find Us on Google Map</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6487665024933!2d-87.06636422602023!3d20.683863799537637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2a14f13ba35%3A0x25d0481d668fb996!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Riviera%20Maya%20-%20BIS!5e0!3m2!1ses-419!2smx!4v1733264580444!5m2!1ses-419!2smx" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  color: #049c84;
}

.footersintop p {
  color: #ffffff;
  font-size: 0.9rem;
}
.uni p{
  font-size: 18px;
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
  color: #049c84;
}

.footersintop .copyright {
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
