<script setup>
// import { computed } from 'vue';
import { useModal } from '@/assets/stores/dadosModal'

const modalStore = useModal()

// const blurClass = computed(() =>
//   (open.value ? 'divBlur' : ''));


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
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="modalStore.dadosUser.name"
              placeholder="Nome"
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

          <button>Continuar</button>

          <div class="termo">
            <div class="linha">
              <hr />
            </div>
            
            <p class="textoFinal">
              Ainda não está no Spot'n Go?
            </p>
            <p>
              <span @click="modalStore.botaoCadastro" class="cadastro">Crie uma conta</span>
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
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.form-container {
  padding: 1rem;
  width: 370px;
  height: 450px;
  border-radius: 35px;
  background-color: #f2f2f2;
  margin: auto;
  font-family: 'Montserrat', sans-serif;
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

.fa.fa-close {
  font-size: 1.5rem;
  align-content: center;
  text-align: center;
}

.logoLogin {
  text-align: center;
  margin-top: 10px
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
  margin-top: 20px;
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 15px;
}

.cadastro {
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;  
}

.opcao {
  margin-top: 15px;
  font-weight: bold;
}

.termo {
  padding: 13px;
  text-align: center;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.textoFinal {
  margin-top: 30px;
  font-size: 14px;
}

.linha {
  margin-top: 20px;
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
