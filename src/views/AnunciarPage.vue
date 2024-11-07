<script setup>
import { useEtapa } from '../stores/dadosEtapa'

const etapaStore = useEtapa()

</script>

<template>
  <transition name="fade" mode="out-in">
    <component
      v-if="etapaStore.componenteAtual"
      :is="etapaStore.componenteAtual"
      :key="etapaStore.etapaAtual"
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
