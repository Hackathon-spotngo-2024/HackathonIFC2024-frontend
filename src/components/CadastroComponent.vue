<script setup>
import { useModal } from '@/stores/dadosModal'

const modalStore = useModal()

</script>

<template>
  <div class="modal">
    <div class="form-container">
      <div class="header-modal">
        <div class="fechar" @click="modalStore.closeRegisterModal">
          <span class="fa fa-close"></span>
        </div>
      </div>
      <div class="containerInterno">
        <div class="logoLogin">
          <img class="imgLogin" src="../assets/LogoSimples.png" alt="Logo" />
        </div>

        <p class="title">Bem vindo(a) ao Spot'n Go</p>
        <p class="sub-title">Ache novos espaços para alugar</p>

        <div class="conteudo">
          <div class="form-item">
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="modalStore.dadosUser.name"
              placeholder="Nome"
            />
          </div>

          <div class="form-item" id="email-area">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="modalStore.dadosUser.email"
              placeholder="Email"
            />
          </div>

          <div class="form-item">
            <label for="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              v-model="modalStore.dadosUser.senha"
              placeholder="Senha"
            />
          </div>

          <div class="form-item" id="confirmarSenha">
            <label for="confirmar-senha">Confirme sua senha</label>
            <input
              type="password"
              name="confirmarSenha"
              id="confirmaSenha"
              v-model="modalStore.dadosUser.confirmarSenha"
              placeholder="Confirme sua senha"
            />
          </div>

          <div class="form-item">
            <label for="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              v-model="modalStore.dadosUser.telefone"
              placeholder="Telefone"
            />
          </div>

          <div class="form-item" id="dataDeNascimento">
            <label for="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              name="dataDeNascimento"
              id="dataDeNascimento"
              v-model="modalStore.dadosUser.dataDeNascimento"
            />
          </div>

          <div class="form-item" id="cpf">
            <label for="cpf">CPF</label>
            <input
              type="number"
              name="cpf"
              id="cpf"
              v-model="modalStore.dadosUser.cpf"
              placeholder="CPF"
            />
          </div>
          <button @click="modalStore.loginUser(); modalStore.closeRegisterModal()">Continuar</button>

          <div class="criar-conta">
              <div class="linha">
                <hr />
              </div>
              <div class="criar-conta-wrapper">
                <p class="textoFinal">Ja possui uma conta?</p>
                <p>
                  <span @click="modalStore.closeRegisterModal(); modalStore.openLoginModal()" class="cadastro">Fazer login</span>
                </p>
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: visibility 0.3s, opacity 0.3s;
}

.form-container {
  width: 420px;
  height: 780px;
  border-radius: 25px;
  background-color: #f2f2f2;
  margin: auto;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
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
  z-index: 999;
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
.containerInterno {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -2.5rem;
}
.logoLogin {
  text-align: center;
}

.imgLogin {
  width: 55px;
  height: 55px;
}
.title {
  text-align: center;
  font-size: 23px;
  font-family: 'Montserrat';
  font-weight: bold;
  margin-top: 10px;
}
.sub-title {
  text-align: center;
  margin: .25rem 0 .5rem 0;
  font-family: 'Montserrat';
  font-size: 18px;
}

.conteudo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-item {
  display: grid;
  grid-auto-columns: auto;
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
  cursor: pointer;
  padding: 13px 100px;
  border-radius: 25px;
  background-color: var(--cor-principal);
  margin-top: 15px;
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 15px;
  transition: 80ms ease-out;
}

button:hover {
  background-color: var(--cor-principal-hover);
}

button:active {
  transform: scale(0.98);
}

label {
  margin: 0 0 3px 10px;
  color: var(--preto-alternativo);
  font-size: 14px;
  font-weight: 500;
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

.cadastro {
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}
</style>
