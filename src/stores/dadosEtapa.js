import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import AnunciarPasso1Component from '@/components/AnunciarComponents/AnunciarPasso1Component.vue'
import AnunciarPasso2Component from '@/components/AnunciarComponents/AnunciarPasso2Component.vue'
import AnunciarPasso3Component from '@/components/AnunciarComponents/AnunciarPasso3Component.vue'
import AnunciarPasso4Component from '@/components/AnunciarComponents/AnunciarPasso4Component.vue'

export const useEtapa = defineStore('etapa', () => {
    const etapaAtual = ref(1)
    const componenteAtual = computed(() => {
      switch (etapaAtual.value) {
        case 1:
          return AnunciarPasso1Component
        case 2:
          return AnunciarPasso2Component
        case 3:
          return AnunciarPasso3Component
        case 4:
          return AnunciarPasso4Component
        default:
          return AnunciarPasso1Component
      }
    })
  
    function proximaEtapa() {
      etapaAtual.value++
    }
  
    function etapaAnterior() {
      etapaAtual.value--
    }
    return {
      etapaAtual,
      componenteAtual,
      proximaEtapa,
      etapaAnterior
    }
  })