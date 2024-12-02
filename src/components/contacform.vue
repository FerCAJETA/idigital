<template>
    <div class="contact-form-container">
      <div class="row justify-content-center">
        <div class="col-md-6 form-container">
          <h1 class="text-center">Contact</h1>
  
          <!-- Formulario -->
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name(s):</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="formData.name"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="surname" class="form-label">Surname(s):</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                v-model="formData.surname"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="phone" class="form-label">Phone:</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                v-model="formData.phone"
                pattern="[0-9]{9}"
              />
            </div>
  
            <div class="mb-3">
              <label for="subject" class="form-label">Subject:</label>
              <input
                type="text"
                class="form-control"
                id="subject"
                v-model="formData.subject"
              />
            </div>
  
            <div class="mb-3">
              <label for="comments" class="form-label">Message:</label>
              <textarea
                class="form-control"
                id="comments"
                v-model="formData.comments"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
  
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="reset" class="btn btn-secondary" @click="resetForm">
                Reset
              </button>
            </div>
          </form>
        </div>
  
        <!-- Google Maps -->
        <div class="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535.7404611047028!2d-87.06977596928742!3d20.662617254510277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e42c82bf55c65%3A0x2e9ba59bc4f97868!2sCc%20Playa%20Del%20Carmen!5e0!3m2!1ses-419!2smx!4v1729085843756!5m2!1ses-419!2smx"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p><i class="fa-solid fa-location-dot"></i> Cc Playa Del Carmen, Playa Blanca 101, 77725 Playa del Carmen, Q.R.</p>
            <p><i class="fa-solid fa-phone"></i> +52 (984) 142 8008</p>
            <p><i class="fa-solid fa-envelope"></i> 2402999@utrivieramaya.edu.mx</p>
            <p><i class="fa-solid fa-clock"></i> Thursday to Sunday At 10:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppForm',
    data() {
      return {
        formData: {
          name: "",
          surname: "",
          email: "",
          phone: "",
          subject: "",
          comments: "",
        },
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
        console.log("Form submitted:", this.formData);
        alert("Form submitted successfully!");
      },
      resetForm() {
        // Reinicia los campos del formulario
        this.formData = {
          name: "",
          surname: "",
          email: "",
          phone: "",
          subject: "",
          comments: "",
        };
      },
    },
  };
  </script> 

<style scoped>
.contact-form-container {
  padding: 20px;
  background-color: #f9f9f9;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  font-size: 1.5rem;
}

.contact-info p {
  font-size: 1rem;
  margin: 5px 0;
}

button {
  margin-top: 10px;
}

textarea {
  resize: none;
}

/* Agregar responsividad para pantallas pequeñas */
@media (max-width: 767px) {
  .contact-form-container {
    padding: 10px;
  }
}
</style>
