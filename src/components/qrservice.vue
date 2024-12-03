<template>
    <div>
        <!-- Pantalla inicial -->
        <div class="full-screen" v-if="showForm">
            <div class="form-container">
                <h1 class="welcome-text">Who is your guest?</h1>
                <form @submit.prevent="submitForm">
                    <label for="name">Name(s)</label>
                    <input type="text" id="name" v-model="name" placeholder="Enter your name" required />
                    <label for="reason">Reason</label>
                    <input type="text" id="reason" v-model="reason" placeholder="Enter the reason" required />
                    <button type="submit" class="submit-btn">Next</button>
                </form>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="center-wrapper" v-else>
            <p class="text"><strong>You can give access to your guest with this QR code</strong></p>
            <div class="qr-layout">
                <div class="qr-code-section">
                    <img src="../assets/img/imghome.jpg" alt="QR Code" class="qr-image">
                </div>
                <div class="qr-buttons">
                    <div class="qr-btn qr-btn-share">
                        <i class="fa-solid fa-share-nodes"></i> Share
                    </div>
                    <div class="qr-btn qr-btn-restart">
                        <i class="fa-solid fa-rotate"></i> Restart
                    </div>
                    <div class="qr-btn qr-btn-download">
                        <i class="fa-solid fa-download"></i> Download
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AppQrservice',
    data() {
        return {
            showForm: true, // Controla si se muestra el formulario
            name: "",
            reason: "",
        };
    },
    methods: {
        submitForm() {
            if (this.name && this.reason) {
                this.showForm = false; // Muestra el contenido principal
                console.log("Name:", this.name);
                console.log("Reason:", this.reason);
            } else {
                alert("Please fill in all fields.");
            }
        },
    },
};
</script>


<style scoped>
/* Pantalla inicial */
.full-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #376fc3;
  padding: 20px;
  box-sizing: border-box;
}

.form-container {
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  width: 400px;
  max-width: 90%;
}

.welcome-text {
  margin-bottom: 20px;
  font-size: 36px;
  color: white;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 10px 0 5px;
  font-size: 16px;
  color: white;
  text-align: left;
  width: 100%;
}

input {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
}

.submit-btn {
  padding: 12px 25px;
  font-size: 18px;
  font-weight: bold;
  color: #436dac;
  background-color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #052c6e;
}

/* Contenido principal */
.center-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #376fc3 50%, white 50%);
  text-align: center;
}

.qr-layout {
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
}

.qr-code-section {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-image {
  width: 400px;
  height: 400px;
  border: 5px solid black;
  border-radius: 15px;
}

.qr-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centra los botones horizontalmente */
  gap: 20px; /* Agrega espacio entre cada botón */
  padding: 10px 20px;
}

.qr-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 10px;
  font-size: 30px;
  font-weight: bold;
  color: #000;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 250px;
  text-align: center;
}

.qr-btn:hover {
  background-color: #f0f0f0;
}

.text {
  color: white;
  margin-top: 20px;
  font-size: 18px;
}

/* Media Queries */
@media (max-width: 768px) {
  .form-container {
    width: 100%;
    padding: 20px;
  }

  .welcome-text {
    font-size: 28px;
  }

  input {
    font-size: 14px;
    padding: 10px;
  }

  .submit-btn {
    font-size: 16px;
    padding: 10px 20px;
  }

  .qr-layout {
    flex-direction: column;
    align-items: center;
  }

  .qr-image {
    width: 300px;
    height: 300px;
  }

  .qr-buttons {
    gap: 15px; /* Reduce el espacio entre botones en pantallas más pequeñas */
  }

  .qr-btn {
    font-size: 18px;
    padding: 10px 8px;
    width: 200px;
  }
}

@media (max-width: 480px) {
  .welcome-text {
    font-size: 22px;
  }

  input {
    font-size: 12px;
    padding: 8px;
  }

  .qr-image {
    width: 250px;
    height: 250px;
  }

  .qr-buttons {
    gap: 10px; /* Espaciado menor en pantallas muy pequeñas */
  }

  .qr-btn {
    font-size: 16px;
    padding: 8px;
    width: 180px;
  }
}

</style>
