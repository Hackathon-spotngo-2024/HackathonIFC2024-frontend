<script setup>

import { onMounted, ref } from 'vue'
import AnunciarPasso1Component from '../components/AnunciarComponents/AnunciarPasso1Component.vue'
import AnunciarPasso2Component from '../components/AnunciarComponents/AnunciarPasso2Component.vue'
import AnunciarPasso3Component from '@/components/AnunciarComponents/AnunciarPasso3Component.vue'
import AnunciarPasso4Component from '@/components/AnunciarComponents/AnunciarPasso4Component.vue'

const etapaAtual = ref(1) //Obtém o valor da etapa atual, se não conseguir, é 1

function proximaEtapa() {
  etapaAtual.value++
  localStorage.setItem('etapaAtual', etapaAtual.value) //"Seta" a etapa atual no localStorage do navegador
}

function etapaAnterior() {
  
  etapaAtual.value--
  localStorage.setItem('etapaAtual', etapaAtual.value)
}

onMounted(() => {
  const etapaSalva = localStorage.getItem('etapaAtual') //Inicia o componente (onMounted) na etapa salva no localStorage
  if (etapaSalva) {
    etapaAtual.value = parseInt(etapaSalva, 10)
}})
</script>

<template>
<AnunciarPasso1Component :etapaAnterior="etapaAnterior" :proximaEtapa="proximaEtapa" v-if="etapaAtual === 1"/>
<AnunciarPasso2Component :etapaAnterior="etapaAnterior" :proximaEtapa="proximaEtapa" v-if="etapaAtual === 2"/>
<AnunciarPasso3Component :etapaAnterior="etapaAnterior" :proximaEtapa="proximaEtapa" v-if="etapaAtual === 3"/>
<AnunciarPasso4Component :etapaAnterior="etapaAnterior" :proximaEtapa="proximaEtapa" v-if="etapaAtual === 4"/>
</template>

<style scoped>
.titulo-etapa-1 {
    font-family: var(--fonte-principal);
}
</style>
