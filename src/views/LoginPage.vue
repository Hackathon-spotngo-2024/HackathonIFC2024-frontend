<script setup></script>
<template>
  <div class="container">
    <div class="login-container">
      <section class="login-section">
        <h1>LOGIN</h1>
        <p>Bem-vindo ao Spot 'n go.</p>
        <form class="login-form">
          <div class="username-input">
            <div class="icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <input type="text" placeholder="Nome de usuário" />
          </div>
          <div class="password-input">
            <div class="icon">
              <i class="fa-solid fa-lock"></i>
            </div>
            <input type="text" placeholder="Nome de usuário" />
          </div>
          <button class="login-button" type="submit">Logar</button>
        </form>
      </section>
      <section class="illustration-section"></section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 700px;
}

.login-section {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.illustration-section {
  width: 600px;
  height: 100%;
  background-color: green;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.username-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--cor-bordas-input);
  gap: 1rem;
  width: calc(300px - 1rem);
  height: calc(45px - 1rem);
  padding: 1rem;
  border-radius: 25px;
}

.username-input i, .password-input i {
  color: #464646;
}

.username-input input {
  border: none;
  outline: none;
  font-size: 1rem;
}

.password-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--cor-bordas-input);
  gap: 1rem;
  width: calc(300px - 1rem);
  height: calc(45px - 1rem);
  padding: 1rem;
  border-radius: 25px;
}

.password-input input {
  border: none;
  outline: none;
  font-size: 1rem;
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
}

.login-button::before {
  content: "";
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
</style>
