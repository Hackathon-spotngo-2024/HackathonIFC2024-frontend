<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import AnimatedBallComponent from '@/components/AnimatedBallComponent.vue'
import BallReversedComponent from '@/components/BallReversedComponent.vue'

const authStore = useAuthStore()
const passwordVisible = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await authStore.login({ email: email.value, password: password.value })
    if (authStore.errorMessage) return
    authStore.showAlert('login')
    if (authStore.accessToken) {
      authStore.userFirstLetter = authStore.getFirstLetter(email.value)
      console.log(authStore.userFirstLetter, email.value)
      setTimeout(authStore.goToHome, 1600)
    }
  } catch (error) {
    console.log(error, authStore.errorMessage)
    authStore.errorMessage = 'Ocorreu um erro desconhecido. Tente novamente.'
  }
}

const showPassword = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>
<template>
  <div class="container">
    <div class="animated-ball">
      <AnimatedBallComponent />
    </div>
    <div class="login-container">
      <section class="login-section">
        <h1>LOGIN</h1>
        <p>Bem-vindo ao Spot 'n go.</p>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="username-input">
            <div class="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input type="text" placeholder="E-mail" v-model="email" />
          </div>
          <div class="password-input">
            <div class="icon">
              <i class="fa-solid fa-lock"></i>
            </div>
            <input
              :type="passwordVisible ? 'text' : 'password'"
              placeholder="Senha"
              v-model="password"
            />
            <button class="show-password-button" type="button" @click="showPassword">
              <i :class="passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>
          </div>
          <button class="login-button" type="submit">Logar</button>
          <div class="error-message">
            <p>{{ authStore.errorMessage }}</p>
          </div>
        </form>
        <div class="linha"></div>
        <div class="cadastro-mensagem">
          Não possui uma conta?
          <router-link class="cadastrar-link" to="/register">Cadastrar</router-link>
        </div>
      </section>

      <section class="illustration-section">
        <img class="green-pattern" src="../assets/image-login.png" alt="" />
      </section>
    </div>
    <div class="animated-ball-reverse">
      <BallReversedComponent />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
}

.animated-ball {
  margin-right: 1.5rem;
}

.animated-ball-reverse {
  margin-left: 1.5rem;
}

.login-container {
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 700px;
  box-shadow: 20px 26px 100px 55px rgba(99, 147, 119, 0.2);
  border-radius: 25px;
}

.login-section {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.login-section p {
  font-size: 1.2rem;
}

.illustration-section {
  width: 600px;
  height: 100%;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 1rem 0;
}

.username-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: calc(300px - 1rem);
  height: calc(45px - 1rem);
  padding: 1rem;
  border-radius: 25px;
  background-color: #f0f3f5;
  border: 0;
}

.username-input i,
.password-input i {
  color: #464646;
}

.username-input input {
  border: none;
  outline: none;
  font-size: 1rem;
  height: 60px;
  width: 220px;
  border-radius: 25px;
  background-color: #f0f3f5;
}

input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #f0f3f5 inset !important; /* Remove a borda amarela */
}

.password-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: calc(300px - 1rem);
  height: calc(45px - 1rem);
  padding: 1rem;
  border-radius: 25px;
  background-color: #f0f3f5;
  border: 0;
}

.password-input input {
  border: none;
  outline: none;
  font-size: 1rem;
  height: 60px;
  width: 220px;
  border-radius: 25px;
  background-color: #f0f3f5;
}

.show-password-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  cursor: pointer;
  transition: 100ms ease-in-out;
  width: 1.5rem;
  height: 1.3rem;
}

.show-password-button:hover {
  background-color: #e4e4e4;
  border-radius: 15px;
}

.show-password-button:active {
  transform: scale(0.94);
}

.login-button {
  position: relative;
  z-index: 2;
  width: 120px;
  height: 60px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  background-image: var(--cor-botao-login);
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  overflow: hidden;
  box-shadow: 0 8px 21px rgba(0, 0, 0, 0.2);
}

.login-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--cor-botao-login-hover);
  border-radius: 35px;
  z-index: -1;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

.login-button:hover::before {
  opacity: 1;
}

.error-message p {
  font-size: 14px;
}

.error-message {
  text-align: center;
  width: 400px;
}

.linha {
  display: block;
  height: 1px;
  width: 300px;
  background-color: var(--cor-linha-divisoria);
}

.cadastrar-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.cadastrar-link:hover {
  text-decoration: underline;
}

.illustration-section {
  display: flex;
  justify-content: end;
}

.signup-image {
  width: 500px;
}

.green-pattern {
  height: 700px;
  border-radius: 0 25px 25px 0;
}

@media (max-height: 860px) {
  .container {
    height: 100vh;
  }
  .login-container,
  .login-section,
  .illustration-section img {
    height: 530px;
  }
  .login-container {
    width: 900px;
  }
}
</style>
