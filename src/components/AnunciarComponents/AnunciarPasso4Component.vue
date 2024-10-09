<script setup>
import { useEtapa } from '@/assets/stores/dadosEtapa';
const etapaStore = useEtapa()

</script>

<template>
<button class="etapaAnterior" @click="etapaStore.etapaAnterior">Voltar</button>
</template>

<style scoped>
</style>