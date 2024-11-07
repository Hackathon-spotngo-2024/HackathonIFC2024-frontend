import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEndereco } from './dadosEndereco'
import { useRouter } from 'vue-router'

export const useReserva = defineStore('reserva', () => {
  const enderecoStore = useEndereco()
  const router = useRouter()

  const userReservas = reactive([])
  const dataVaziaAlert = ref(false)
  const datasReserva = reactive({
    dataInicio: '',
    dataTermino: ''
  })

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
        userReservas.push({ ...enderecoStore.dadosAnuncio })
        console.log('reserva adicionada:', userReservas)
        router.push({ name: "AnuncioReservado" })
      }
    }
  }

  return {
    userReservas,
    adicionarReserva,
    dataVaziaAlert,
    datasReserva,
    isDataVazia
  }
})
