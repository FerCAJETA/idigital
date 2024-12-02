<template>
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
