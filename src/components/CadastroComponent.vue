<script setup>
import { reactive, ref, computed } from 'vue'
import LoginComponent from './LoginComponent.vue';
const props = defineProps(['modal'])

const open = ref(false)


const emit = defineEmits(['closeModal']);

const user = reactive({
 name: '',
 senha: ''
})


const closeModal = () => {
 emit('closeModal')
}

const blurClass = computed(() => (open.value ? 'divBlur' : ''))

</script>


<template>
  
  <LoginComponent v-if="open"/>
        <div class="modal" v-if="props.modal">
   <div class="form-container">
     <div @click="closeModal" class="fechar">
       <span class="fa fa-x"></span>
     </div>
     <div class="containerInterno">
       <div class="logoLogin">
         <img class="imgLogin" src="../assets/LogoSimples.png" alt="Logo" />
       </div>

        <p class="title">Bem vindo(a) ao Spot'n Go</p>
        <h1 class="title">{{ title }}</h1>

        <div class="conteudo">
          <div class="form-item"><ChildComponent :open-modal="openModal" />
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" v-model="user.name" placeholder="Nome" />
          </div>

          <div class="form-item">
            <label for="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              v-model="user.senha"
              placeholder="Senha"
            />
          </div>

          <button>Continuar</button>

          <p class="opcao">ou</p>

          <button class="api">Google API</button>

          <div class="termo">
            <p>
              Ao continuar, você concorda com os <br />
              <a class="link" href="">termo de serviço</a> do Spot'n Go e confirma que <br />
              leu nossa <a class="link" href="">Politica de Privacidade.</a> <br />
              <a class="link" href="">Aviso na coleta de informações.</a>
            </p>
            <div class="linha">
              <hr />
            </div>
            <p class="textoFinal">
              Ainda não está no Spot'n Go? 
              <span class="cadastro" @click="open = !open">Crie uma conta</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  transition: visibility 0.3s, opacity 0.3s;
}

.form-container {
  width: 460px;
  height: 570px;
  border-radius: 25px;
  background-color: #f2f2f2;
  margin: auto;
  font-family: 'Montserrat', sans-serif;
}

.container-interno {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fechar {
  display: flex;
  justify-content: end;
  margin: 1rem 1rem 0 0;
  cursor: pointer;
}

.fa.fa-close {
  width: 2rem;
  height: 2rem;
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
  text-align: center;
  font-size: 23px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 10px;
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
  margin-top: 15px;
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 15px;
}

.cadastro{
  font-weight: bold;
  cursor: pointer;
}

.api {
  background-color: #bebebe;
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
  margin-top: 20px;
  font-size: 12px;
  margin-bottom: 5px;
}

.linha {
  margin-top: 25px;
  margin-left: 60px;
  margin-right: 60px;
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
