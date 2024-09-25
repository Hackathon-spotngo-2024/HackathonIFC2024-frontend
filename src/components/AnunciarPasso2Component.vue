<script setup>
import { ref } from 'vue'

defineProps({
    proximaEtapa: Function
})

const tituloEtapa2 = ref('Comece com as informações básicas:')
</script>

<template>
    <h1>{{ tituloEtapa2 }}</h1>
</template>

<style scoped>
</style>