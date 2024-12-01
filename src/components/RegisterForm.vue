<template>
  <div class="register-container">
    <div class="register-box">
      <h1 class="title">Create an Account</h1>
      <div class="form-group">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="input-field"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="input-field"
        />
      </div>
      <div class="button-group">
        <button @click="register" class="submit-btn">Submit</button>
        <button @click="signInWithGoogle" class="google-btn">
          Sign In With Google
        </button>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"; 
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { useRouter } from "vue-router"; 

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();

const register = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = "Please fill in all fields";
    return;
  }
  if (password.value.length < 6) {
    errorMessage.value = "Password must be at least 6 characters long";
    return;
  }

  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Successfully registered");
    router.push("/Feed");
  } catch (error) {
    console.error(error.code, error.message);
    if (error.code === "auth/email-already-in-use") {
      errorMessage.value = "Email is already in use";
    } else if (error.code === "auth/invalid-email") {
      errorMessage.value = "Invalid email format";
    } else if (error.code === "auth/weak-password") {
      errorMessage.value = "Weak password";
    } else {
      errorMessage.value = "Registration failed. Please try again.";
    }
  }
};

const signInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google Sign-In successful", result.user);
    alert("Signed in with Google successfully");
    router.push("/Feed");
  } catch (error) {
    console.error("Google Sign-In failed", error.message);
    errorMessage.value = "Google Sign-In failed. Please try again.";
  }
};
</script>
<style scoped>
/* Estilo del contenedor principal */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Estilo de la caja del formulario */
.register-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

/* Estilo del título */
.title {
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.submit-btn,
.google-btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn {
  background: linear-gradient(to right, #ff4300, #ff6400);
  color: white;
}

.submit-btn:hover {
  background-color: #357abd;
}

.google-btn {
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
}

.google-btn:hover {
  background-color: #f5f5f5;
}

/* Estilo para mensajes de error */
.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
