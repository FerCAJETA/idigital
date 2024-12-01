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
                    <img src="@/assets/img/qr-code.png" alt="QR Code" class="qr-image">
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
    height: auto;
    /* Ocupa el 100% del alto de la ventana */
    width: 100%;
    /* Ocupa el 100% del ancho de la ventana */
    background: #376fc3;
    padding: 20px;
    box-sizing: border-box;
}

.form-container {
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    /* Añade sombra para destacar */
    width: 400px;
    /* Tamaño más grande */
    max-width: 90%;
    /* Se adapta en pantallas más pequeñas */
}

.welcome-text {
    margin-bottom: 20px;
    font-size: 36px;
    /* Tamaño de texto más grande */
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
    /* Tamaño controlado */
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
/* Estilos existentes para el contenido principal */
.center-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
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
    border-radius: 10%;
}

.qr-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

.qr-btn-share,
.qr-btn-restart,
.qr-btn-download {
    color: black;
}

.text {
    color: white;
    margin-top: 20px;
    font-size: 18px;
}
</style>
