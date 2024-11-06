import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReserva = defineStore('etapa', () => {
  const userReservas = ref([])

  /*  function reservarAnuncio() {
        if (datasReserva.dataInicio == '' || datasReserva.dataTermino == '') {
            dataVaziaAlert.value = true
        }
        else {
            userReservas.push(reserva)
        }
    } */

  return {
    userReservas
  }
})
