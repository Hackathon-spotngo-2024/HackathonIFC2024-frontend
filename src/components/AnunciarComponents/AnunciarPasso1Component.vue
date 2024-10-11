<script setup>
import { ref } from 'vue'
import { useEtapa } from '@/assets/stores/dadosEtapa';

const etapaStore = useEtapa()

const tituloEtapa1 = ref("É muito fácil <br/> anunciar no Spot 'n Go")
</script>

<template>
  <div class="container-etapa-1">
    <div class="container-titulo">
      <h1 class="titulo-etapa-1" v-html="tituloEtapa1"></h1>
    </div>
    <div class="instrucoes">
      <div class="instrucao">
        <div class="tiulo-instrucao-container">
          <h2 class="titulo-instrucao">1: Descreva sua locação</h2>
        </div>
        <div class="descricao-instrucao-container">
          <p>
            Compartilhe algumas informações básicas, como a localização e capacidade de pessoas no
            local.
          </p>
        </div>
      </div>
      <div class="instrucao">
        <div class="tiulo-instrucao-container">
          <h2 class="titulo-instrucao">2: Adicione detalhes para destaca-la</h2>
        </div>
        <div class="descricao-instrucao-container">
          <p>Adicione fotos, além de um título e uma descrição.</p>
        </div>
      </div>
      <div class="instrucao">
        <div class="tiulo-instrucao-container">
          <h2 class="titulo-instrucao">3: Publique seu anúncio!</h2>
        </div>
        <div class="descricao-instrucao-container">
          <p>Defina o preço e publique seu anúncio. Fácil, não é?</p>
        </div>
      </div>
    </div>
    <div class="submit-botao-container">
      <button class="continue-botao" @click="etapaStore.proximaEtapa">Continue</button>
    </div>
  </div>
</template>

<style scoped>
.container-etapa-1 {
  display: flex;
  flex-direction: column;
}

.titulo-etapa-1 {
  display: flex;
  font-size: 2rem;
  text-align: center;
}

.container-titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.instrucoes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 100px 0;
}

.instrucao {
  width: 270px;
  height: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 35px;
}

.titulo-instrucao {
  margin: 0 0 32px;
}

.submit-botao-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}

.continue-botao {
  cursor: pointer;
  width: 580px;
  height: 80px;
  border-radius: 40px;
  background-color: var(--cor-principal);
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.continue-botao:hover {
  background-color: var(--cor-principal-hover);
  transform: scale(1.01);
}

@media (max-width:1200px) {
   .container-titulo {
       margin-top:50px; 
   }

   .instrucoes {
       flex-direction: column; 
       margin:50px 0; 
   }

   .instrucao {
       width:auto; 
       margin-bottom:30px; 
   }

   .continue-botao {
       width:auto; 
       padding-left:20px; 
       padding-right:20px; 
   }
}

@media (max-width:768px) {
   .titulo-etapa-1 {
       font-size:1.5rem; 
   }

   .continue-botao {
       width:auto; 
       height:auto; 
       font-size:1.5rem; 
   }
}

@media (max-width:576px) {
   .titulo-etapa-1 {
       font-size:1.2rem; 
   }

   .continue-botao {
       font-size:1.2rem; 
   }
}
</style>