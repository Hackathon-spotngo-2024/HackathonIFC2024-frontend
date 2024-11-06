import { useEndereco } from "./dadosEndereco"
import { defineStore } from "pinia"
import { ref, reactive } from "vue"

export const useReserva = defineStore('etapa', () => {
    const enderecoStore = useEndereco()

    const datasReserva = reactive({
        dataInicio: '',
        dataTermino: ''
    })

    const dataVaziaAlert = ref(false)
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
        datasReserva, dataVaziaAlert, userReservas
    }
})