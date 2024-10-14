<script setup>
import { useEtapa } from '@/stores/dadosEtapa';
import { useEndereco } from '@/stores/dadosEndereco'
const etapaStore = useEtapa()
const enderecoStore = useEndereco()

</script>

<template>
    <section class="etapa-4-container">
        <div class="titulo-e-descricao">
            <label for="titulo-input">Título</label>
            <input type="text" id="titulo-input" v-model="enderecoStore.dadosEndereco.titulo">
            <label for="descricao-input">Descrição</label>
            <input type="text" id="descricao-input" v-model="enderecoStore.dadosEndereco.descricao">
        </div>
        <div class="adicionar-fotos">

        </div>
    </section>
<button class="etapaAnterior" @click="etapaStore.etapaAnterior">Voltar</button>
</template>

<style scoped>
</style>