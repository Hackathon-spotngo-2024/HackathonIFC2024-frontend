<script setup>
import BotaoAvancarEVoltarComponent from '../BotaoAvancarEVoltarComponent.vue'
import { ref } from 'vue'
import { useEndereco } from '@/assets/stores/dadosEndereco';

const enderecoStore = useEndereco()

const tituloEtapa3 = ref('Mais algumas informações sobre a acomodação')
function adicionarHospede() {
  enderecoStore.dadosEndereco.LimiteHospedes++
}

function reduzirHospede() {
  enderecoStore.dadosEndereco.LimiteHospedes--
  if (enderecoStore.dadosEndereco.LimiteHospedes < 0) enderecoStore.dadosEndereco.LimiteHospedes = 0
}
</script>

<template>
  <section class="etapa-2-container">
    <div class="titulo-principal-container">
      <h1 class="titulo-principal">{{ tituloEtapa3 }}</h1>
    </div>

    <div class="limite-visitantes-wrapper">
      <label for="botao-visitantes" class="limite-visitantes-titulo">Limite de visitantes</label>
      <div class="botoes-visitantes">
      <input type="button" class="botao-visitantes" value="-" @click="reduzirHospede">
      <p class="numero-visitantes">{{ enderecoStore.dadosEndereco.LimiteVisitantes }}</p>
      <input type="button" class="botao-visitantes" value="+" @click="adicionarHospede">
    </div>
  </div>

    <div class="preco-wrapper">
      <label for="preco-input" class="preco-titulo">Preço:</label>
      <input type="text" id="preco-input"v-model="enderecoStore.dadosEndereco.preco">
    </div>

    <BotaoAvancarEVoltarComponent />
  </section>
</template>

<style scoped>
.etapa-2-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titulo-principal-container {
  font-size: 2em;
  margin-top: 100px;
}
.limite-visitantes-wrapper {
  display: flex;
  flex-direction: column;
}
.botoes-visitantes {
  display: flex;
  flex-direction: row;
}
.limite-visitantes-titulo {
  font-size: 20px;
  font-weight: 600;
}
.botao-visitantes {
  display: flex;
  text-align: center;
  height: 25px;
  width: 25px;
  outline: none;
  border: 1px solid var(--cor-bordas-input);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0);
}
</style>
