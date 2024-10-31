import { useEndereco } from "./dadosEndereco"

export const useReserva = defineStore('etapa', () => {
    const enderecoStore = useEndereco()

    const datasReserva = ref({
        dataInicio: '',
        dataTermino: ''
    })

    const dataVaziaAlert = ref(false)
    const userReservas = ref([])

    function reservarAnuncio() {
        if (datasReserva.dataInicio == '' || datasReserva.dataTermino == '') {
            dataVaziaAlert.value = true
        }
        else {
            userReservas.push(reserva)
        }
    }
})