// src/stores/dadosNavbar.js
import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useNavbar = defineStore('navbar', () => {
    const isTelaPequena = ref(false)

    // Função que muda a nav dependendo do tamanho da tela
    function trocarNavbar() {
        isTelaPequena.value = window.innerWidth <= 1100
    }

    onMounted(() => {
        trocarNavbar() // Verifica o tamanho da tela inicial
        window.addEventListener('resize', trocarNavbar)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', trocarNavbar) // Removve quando desmonta o componente
    })

    return {
        isTelaPequena,
        trocarNavbar,
    }
})



