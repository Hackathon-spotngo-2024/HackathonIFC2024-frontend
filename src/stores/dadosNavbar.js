// src/stores/dadosNavbar.js
import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useNavbar = defineStore('navbar', () => {
    const isTelaPequena = ref(false)
    const isTelaMobile = ref(false)

    // Função que muda a nav dependendo do tamanho da tela
    function trocarNavbar() {
        isTelaPequena.value = window.innerWidth <= 1100
        isTelaMobile.value = window.innerWidth <= 760
    }

    onMounted(() => {
        trocarNavbar() // confere o tamanho da tela inicial
        window.addEventListener('resize', trocarNavbar)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', trocarNavbar) // troca quando desmonta o componente
    })

    return {
        isTelaPequena,
        trocarNavbar,
        isTelaMobile
    }
})



