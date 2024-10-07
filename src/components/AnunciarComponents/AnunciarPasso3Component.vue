<script setup>
import BotaoAvancarEVoltarComponent from '../BotaoAvancarEVoltarComponent.vue'
import { ref } from 'vue'

const tituloEtapa3 = ref('Mais algumas informações sobre a acomodação')
</script>

<template>
  <section class="etapa-2-container">
    <div class="titulo-principal-container">
      <h1 class="titulo-principal">{{ tituloEtapa3 }}</h1>
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
  padding-top: 6rem;
}
.titulo-principal-container {
  font-size: 2em;
}
</style>
