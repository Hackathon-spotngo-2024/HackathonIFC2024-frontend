<script setup>
import BotaoAvancarEVoltarComponent from '../BotaoAvancarEVoltarComponent.vue';

defineProps({
    proximaEtapa: Function,
    etapaAnterior: Function,
})


</script>

<template>
<BotaoAvancarEVoltarComponent :proximaEtapa="proximaEtapa" :etapaAnterior="etapaAnterior" />
</template>

<style scoped>
</style>