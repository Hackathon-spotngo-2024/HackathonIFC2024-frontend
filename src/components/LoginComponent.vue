<script setup>
import { reactive, ref, computed, defineEmits, defineProps } from 'vue'
defineProps(['title'])

const user = reactive({
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    dataDeNascimento: '',
    cpf: ''
})

</script>

<template>
</template>

<style scoped>

</style>