<script setup>

import { ref } from 'vue'
import AnunciarPasso1Component from '../components/AnunciarPasso1Component.vue'
import AnunciarPasso2Component from '../components/AnunciarPasso2Component.vue'
const etapaAtual = ref(1)

function proximaEtapa() {
  etapaAtual.value++
}
</script>

<template>
<AnunciarPasso1Component :proximaEtapa="proximaEtapa" v-if="etapaAtual === 1"/>
<AnunciarPasso2Component :proximaEtapa="proximaEtapa" v-if="etapaAtual === 2"/>
</template>

<style scoped>
.titulo-etapa-1 {
    font-family: var(--fonte-principal);
}
</style>
