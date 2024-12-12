<script setup>
import { onMounted, ref } from 'vue'
import { useEtapa } from '../../stores/dadosEtapa'
import { useEndereco } from '../../stores/dadosEndereco'

const etapaStore = useEtapa()
const enderecoStore = useEndereco()

const tituloEtapa1 = ref("É muito fácil<br>anunciar no Spot 'n Go")

onMounted(() => {
  enderecoStore.setarDadosLocalStorage
  window.scrollTo(0, 0)
})
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
    <div class="house-image">
      <img src="../../assets/house-image.svg" alt="" />
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
  margin: 100px 0 100px 0;
}

.instrucao {
  width: 270px;
  height: 50px;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 35px 0 35px;
}

.titulo-instrucao {
  margin: 0 0 32px 0;
}

.submit-botao-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px 0 0 0;
}

.house-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.house-image img {
  width: 120px;
}

.continue-botao {
  cursor: pointer;
  width: 580px;
  height: 80px;
  border-radius: 40px;
  background: var(--cor-botao-login);
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.continue-botao:hover {
  filter: brightness(0.85);
  transform: scale(1.01);
}
@media (max-width: 800px) {
  .container-titulo {
    margin-top: 50px;
  }
  .submit-botao-container {
    margin-top: 200px;
  }
  .submit-botao-container button {
    width: 500px;
  }
  .submit-botao-container {
    margin-top: 50px;
  }
  .house-image {
    height: 250px;
  }
}

@media (max-width: 675px) {
  h2 {
    font-size: 24px;
  }
  .instrucao {
    width: fit-content;
  }
  .instrucoes {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 0;
  }
  .submit-botao-container {
    margin-top: 20px;
  }
  .titulo-instrucao {
    margin-bottom: 10px;
  }
  .submit-botao-container button {
    width: 300px;
  }
}

@media (max-width: 450px) {
  .titulo-etapa-1 {
    font-size: 24px;
  }
  .descricao-instrucao-container {
    display: none;
  }
  .instrucoes {
    gap: 2rem;
  }
  .instrucao {
    height: fit-content;
  }
  .instrucao h2 {
    font-size: 20px;
  }
  .submit-botao-container {
    margin-top: 40px;
  }
}

@media (max-width: 370px) {
  .instrucoes {
    gap: 2rem;
  }
  .submit-botao-container button {
    width: 220px;
  }
}
</style>
