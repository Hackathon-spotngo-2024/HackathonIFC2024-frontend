<script setup>
import { ref } from 'vue';

defineProps({
    proximaEtapa: Function,
    etapaAnterior: Function
})

const tituloEtapa1 = ref("É muito fácil anunciar no Spot 'n Go")

</script>

<template>
    <div class="container-etapa-1">
      <h1 class="titulo-etapa-1">{{ tituloEtapa1 }}</h1>
      <div class="instrucao-1">
        <h2>1 Descreva sua locação</h2>
        <p>Compartilhe algumas informações básicas, como a localização e capacidade de pessoas no local.</p>
      </div>
      <div class="instrucao-1">
        <h2>2 Adicione detalhes para destaca-la</h2>
        <p>Adicione fotos, além de um título e uma descrição, molezinha.</p>
      </div>
      <div class="instrucao-1">
        <h2>3 publique!</h2>
        <p>Defina o preço e publique seu anúncio. Facinho, não é?</p>
      </div>
      <div class="submit-botao-container">
        <button class="continue-botao" @click="proximaEtapa">Continue</button>
      </div>
    </div>
  </template>

  <style scoped>

  </style>