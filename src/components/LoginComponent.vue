<script setup>
import { useModal } from '@/stores/dadosModal'

const modalStore = useModal()
</script>

<template>
  <div class="blur">
    <div class="modal" style="position:">
      <div class="form-container">
        <div class="header-modal">
          <div class="fechar" @click="modalStore.closeLoginModal">
            <span class="fa fa-close"></span>
          </div>
        </div>
        <div class="logoLogin">
          <img class="imgLogin" src="../assets/LogoSimples.png" alt="Logo" />
        </div>
        <div class="containerInterno">
          <h1 class="title">Bem-vindo ao Spot'n Go</h1>

          <div class="conteudo">
            <div class="form-item">
              <label for="email">E-mail</label>
              <input type="text" name="name" id="email" v-model="modalStore.dadosUser.email" placeholder="E-mail" />
            </div>

            <div class="form-item">
              <label for="senha">Senha</label>
              <input type="password" name="senha" id="senha" v-model="modalStore.dadosUser.senha" placeholder="Senha" />
            </div>

            <button @click="modalStore.logar()">Continuar</button>
            <div class="campo-vazio-alert" v-if="modalStore.campoLoginVazio == true">
              <p class="campo-vazio-text">Preencha todos os campos para prosseguir.</p>
            </div>

            <div class="criar-conta">
              <div class="linha">
                <hr />
              </div>
              <div class="criar-conta-wrapper">
                <p class="textoFinal">Ainda não está no Spot'n Go?</p>
                <p>
                  <span @click="modalStore.closeLoginModal(); modalStore.openRegisterModal()" class="cadastro">Crie uma
                    conta</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.form-container {
  padding: 1rem;
  width: 360px;
  height: 440px;
  border-radius: 35px;
  background-color: #f2f2f2;
  margin: auto;
  font-family: var(--fonte-principal);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
}

.container-interno {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header-modal {
  display: flex;
  justify-content: end;
}

.fechar {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  transition: 150ms ease-in-out;
  position: absolute;
}

.fechar:hover {
  background-color: var(--cor-voltar-btn-hover);
}

.fechar:active {
  transition: 100ms;
  transform: scale(0.8);
}

.fa.fa-close {
  font-size: 1.5rem;
  align-content: center;
  text-align: center;
}

.logoLogin {
  text-align: center;
  margin-top: 10px;
}

.imgLogin {
  width: 55px;
  height: 55px;
}

.title {
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 1rem 0 1rem 0;
  font-weight: 500;
  color: var(--preto-alternativo);
}

.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-item {
  display: grid;
  grid-auto-columns: auto;
  margin-top: 5px;
}

input {
  width: 250px;
  height: 35px;
  border-radius: 15px;
  border: solid 2px var(--cor-bordas-input);
  background-color: #f2f2f2;
  padding: 0 10px;
  outline: none;
}

button {
  width: 270px;
  cursor: pointer;
  padding: 13px 100px;
  border-radius: 25px;
  background-color: var(--cor-principal);
  margin-top: 20px;
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;
  transition: 80ms ease-out;
}

button:hover {
  background-color: var(--cor-principal-hover);
}

button:active {
  transform: scale(0.98);
}

.campo-vazio-alert {
  margin-top: 10px;
  color: var(--cor-texto-erro);
}

.campo-vazio-alert > p {
  font-size: 14px;
}

.cadastro {
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.criar-conta {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1.5rem;
  gap: 1.5rem;
}

.textoFinal {
  font-size: 14px;
}

label {
  margin: 0 0 3px 10px;
  color: var(--preto-alternativo);
  font-size: 14px;
  font-weight: 500;
}
</style>
