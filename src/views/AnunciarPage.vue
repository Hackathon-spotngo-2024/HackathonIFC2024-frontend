<script setup>
import { ref, computed } from 'vue'
import AnunciarPasso1Component from '../components/AnunciarComponents/AnunciarPasso1Component.vue'
import AnunciarPasso2Component from '../components/AnunciarComponents/AnunciarPasso2Component.vue'
import AnunciarPasso3Component from '@/components/AnunciarComponents/AnunciarPasso3Component.vue'
import AnunciarPasso4Component from '@/components/AnunciarComponents/AnunciarPasso4Component.vue'

const etapaAtual = ref(1);

const componenteAtual = computed(() => {
  switch (etapaAtual.value) {
    case 1:
      return AnunciarPasso1Component;
    case 2:
      return AnunciarPasso2Component;
    case 3:
      return AnunciarPasso3Component;
    case 4:
      return AnunciarPasso4Component;
    default:
      return AnunciarPasso1Component;
  }
})

function proximaEtapa() {
  etapaAtual.value++
}

function etapaAnterior() {
  etapaAtual.value--
}


</script>

<template>
  <transition name="fade" mode="out-in">
    <component
      v-if="componenteAtual"
      :is="componenteAtual"
      :etapaAnterior="etapaAnterior"
      :proximaEtapa="proximaEtapa"
      :key="etapaAtual"
    />
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: 400ms ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0.05;
}
</style>
