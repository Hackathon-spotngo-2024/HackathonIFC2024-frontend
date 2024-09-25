<script setup>
defineProps({
    proximaEtapa: Function,
    etapaAnterior: Function
})


</script>

<template>
<button class="etapaAnterior" @click="etapaAnterior">Voltar</button>
</template>

<style scoped>
</style>