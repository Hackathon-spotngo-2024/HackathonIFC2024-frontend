<script setup>
import { useModal } from '@/assets/stores/dadosModal'

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
        <p class="sub-title">Ache novos imóveis para alugar</p>
        <h1 class="title" id="dynamic-title">{{ title }}</h1>

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

          <button @click="modalStore.closeRegisterModal">Continuar</button>
          <div class="termo">
            <p>
              Ao continuar, você concorda com os <br />
              <a class="link" href="">termo de serviço</a> do Spot'n Go e confirma que <br />
              leu nossa <a class="link" href="">Politica de Privacidade.</a> <br />
              <a class="link" href="">Aviso na coleta de informações.</a>
            </p>
            <div class="linha">
                <hr>
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
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  transition: visibility 0.3s, opacity 0.3s;
}

.form-container {
  width: 420px;
  height: 710px;
  border-radius: 25px;
  background-color: #f2f2f2;
  margin: auto;
  padding: 1rem;
  font-family: 'Montserrat';
  position: relative;
  z-index: 1001;
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
  z-index: 1000;
}

.fechar:hover {
  background-color: var(--cor-voltar-btn-hover);
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
  margin-top: 10px;
  font-family: 'Montserrat';
  font-size: 18px;
}
.form-item {
  display: grid;
  grid-auto-columns: auto;
  margin-top: 5px;
}
.termo {
  padding: 13px;
  text-align: center;
  font-size: 10px;
  font-family: 'Montserrat';
}

.linha {
  margin-top: 10px;
}

input {
  width: 250px;
  height: 35px;
  border-radius: 15px;
  border: solid 1px rgba(79, 79, 79, 1);
  background-color: #f2f2f2;
  margin-bottom: 5px;
  padding: 0 10px;
  outline: none;
}

button {
  padding: 13px 100px;
  border-radius: 25px;
  background-color: var(--cor-principal);
  margin-top: 15px;
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 15px;
}

.link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

label {
  margin-left: 10px;
  color: black;
  font-size: 12px;
  font-weight: 500;
}
</style>
