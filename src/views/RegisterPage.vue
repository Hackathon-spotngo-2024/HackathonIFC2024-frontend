<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import AnimatedBallComponent from '@/components/AnimatedBallComponent.vue'
import BallReversedComponent from '@/components/BallReversedComponent.vue'
import router from '@/router'

const authStore = useAuthStore()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const passwordVisible = ref({
  password: false,
  confirmPassword: false
})
const goToLogin = () => {
  router.push('/login')
}

const showPassword = (type) => {
  passwordVisible.value[type] = !passwordVisible.value[type]
}

const handleRegister = async () => {
  try {
    await authStore.register({
      email: email.value,
      username: username.value,
      password: password.value,
      re_password: confirmPassword.value
    })
    if (password.value != confirmPassword.value) authStore.errorMessage = 'As senhas deve coincidir'
    else if (password.value.length < 6)
      authStore.errorMessage = 'A senha deve conter pelo menos 6 caracteres'
    else {
      if (authStore.userApproved) {
        authStore.userFirstLetter = email.value.substr(0, 1)
        authStore.showAlert('register')
        setTimeout(goToLogin, 1600)
      }
    }
  } catch (error) {
    alert('Erro ao realizar o cadastro, tente novamente.')
  }
}
</script>
<template>
  <div class="container">
    <div class="animated-ball">
      <AnimatedBallComponent />
    </div>
    <div class="login-container">
      <section class="login-section">
        <h1>REGISTRE-SE</h1>
        <p>Bem-vindo ao Spot 'n go.</p>
        <form @submit.prevent="handleRegister" class="login-form">
          <div class="username-input">
            <div class="icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <input type="text" placeholder="Nome de usuário" v-model="username" />
          </div>
          <div class="email-input">
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
              :type="passwordVisible.password ? 'text' : 'password'"
              placeholder="Senha"
              v-model="password"
            />
            <button class="show-password-button" type="button" @click="showPassword('password')">
              <i
                :class="passwordVisible.password ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
              ></i>
            </button>
          </div>
          <div class="confirm-password-input">
            <div class="icon">
              <i class="fa-solid fa-lock"></i>
            </div>
            <input
              :type="passwordVisible.confirm ? 'text' : 'password'"
              placeholder="Confirmar senha"
              v-model="confirmPassword"
            />
            <button class="show-password-button" type="button" @click="showPassword('confirm')">
              <i
                :class="passwordVisible.confirm ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
              ></i>
            </button>
          </div>
          <button class="login-button" type="submit">Cadastrar</button>
          <div class="error-message">
            <p>{{ authStore.errorMessage }}</p>
          </div>
        </form>
        <div class="linha"></div>
        <div class="cadastro-mensagem">
          Já possui uma conta?
          <router-link class="cadastrar-link" to="/login">Login</router-link>
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
  box-shadow: 20px 70px 100px 55px rgba(99, 147, 119, 0.2);
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

.username-input,
.password-input,
.email-input,
.confirm-password-input {
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

i {
  color: #464646;
}

.username-input input,
.email-input input,
.password-input input,
.confirm-password-input input {
  border: none;
  outline: none;
  font-size: 1rem;
  height: 60px;
  width: 220px;
  border-radius: 25px;
  background-color: #f0f3f5;
}

input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #f0f3f5 inset !important;
  /* Remove a borda amarela */
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

.error-message p {
  font-size: 14px;
}

.error-message {
  text-align: center;
  width: 400px;
}

/* responsividade */

@media (max-height: 860px) {
  .container {
    height: 100vh;
  }

  .login-container,
  .login-section,
  .illustration-section img {
    height: 570px;
  }

  .login-container {
    width: 900px;
  }

  .username-input,
  .email-input,
  .password-input,
  .confirm-password-input {
    scale: 0.85;
  }

  form {
    gap: 0.2rem;
    margin: 0.4rem 0 0.4rem 0;
  }

  .login-button {
    margin-top: 0.5rem;
  }
}

@media (max-width: 1260px) {
  .login-container {
    width: 700px;
    width: fit-content;
  }
  .illustration-section,
  .green-pattern {
    display: none;
  }
}

@media (max-width: 760px) {
  .login-container {
    width: 400px;
    height: 600px;
  }
  .login-section h1 {
    font-size: 30px;
  }
  .login-section p {
    font-size: 1rem;
  }
  .login-form {
    width: 280px;
    margin-bottom: 8px;
  }
  .linha {
    width: 220px;
  }
  .username-input,
  .email-input,
  .password-input,
  .confirm-password-input {
    border-radius: 18px;
    width: 270px;
  }
  .username-input input,
  .email-input input,
  .password-input input,
  .confirm-password-input input {
    border-radius: 18px;
    width: 260px;
    font-size: 1rem;
  }
  .login-button {
    margin-top: 8px;
    width: 90px;
    height: 50px;
    font-size: 14px;
  }
}

@media (max-width: 486px) {
  .container {
    height: 100dvh;
  }
  .animated-ball,
  .animated-ball-reverse {
    display: none;
  }
  .login-container,
  .login-section {
    width: 100dvw;
    height: 100dvh;
  }
  .login-form {
    width: 100dvw;
  }
  .username-input,
  .email-input,
  .password-input,
  .confirm-password-input {
    width: 80dvw;

  }
  .username-input input,
  .email-input input,
  .password-input input,
  .confirm-password-input input {
    width: 90%;
  }
  .error-message {
    margin-top: 1rem;
    width: 80dvw;
  }
}
</style>
