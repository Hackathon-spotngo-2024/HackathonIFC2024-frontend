import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEndereco } from './dadosEndereco'
import { useRouter } from 'vue-router'

export const useReserva = defineStore('reserva', () => {
  const enderecoStore = useEndereco()
  const router = useRouter()

  const userReservas = reactive([])
  const dataVaziaAlert = ref(false)
  let novaReserva = {}

  const datasReserva = reactive({
    dataInicio: '',
    dataTermino: ''
  })

  const details = ref(false)

  function isDataVazia() {
    if (datasReserva.dataInicio == '' || datasReserva.dataTermino == '') {
      return true
    }
    return false
  }

  function verificarDatas() {
    if (datasReserva.dataInicio < datasReserva.dataTermino && !isDataVazia()) return false
    return true
  }

  function adicionarReserva() {
    if (verificarDatas()) {
      dataVaziaAlert.value = true
      return
    } else {
      if (enderecoStore.dadosAnuncio) {
        novaReserva = {
          ...JSON.parse(JSON.stringify(enderecoStore.dadosAnuncio)),
          dataInicio: datasReserva.dataInicio,
          dataTermino: datasReserva.dataTermino
        }
        userReservas.push(novaReserva)
        console.log(novaReserva)  //teste
        console.log(`userReservas: ${userReservas}`) //teste
        router.push({ name: 'AnuncioReservado' })
      }
    }
  }

  function deletarReserva(id) {
    const position = userReservas.findIndex((novaReserva) => novaReserva.id == id)
    console.log(position, userReservas)
    userReservas.splice(position, 1)
  }

  const showDetails = (index) => {
    details.value[index] = !details.value[index]
  }

  return {
    userReservas,
    adicionarReserva,
    dataVaziaAlert,
    datasReserva,
    isDataVazia,
    showDetails,
    deletarReserva
  }
})