import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEndereco } from './dadosEndereco'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';


export const useReserva = defineStore('reserva', () => {
  const enderecoStore = useEndereco()
  const router = useRouter()
  
  const userReservas = reactive([])
  const dataVaziaAlert = ref(false)
  let novaReserva = {}
  
  const details = ref(false)

  const cancelarReservaId = ref(null)
  const cancelarReservaModal = ref(false)

  const isReservasEmpty = ref(false)
  
  const datasReserva = reactive({
    dataInicio: '',
    dataTermino: ''
  })

  function reservasEmptyVerifier() {
    if(userReservas.length == 0) isReservasEmpty.value = true
    else isReservasEmpty.value = false
    console.log(userReservas)
  }
  
  const toggleCancelarModal = (id) => {
    cancelarReservaId.value = id
    cancelarReservaModal.value = !cancelarReservaModal.value
  }
  
  function showAlert() {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Você cancelou sua reserva.',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });
  }

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
        reservasEmptyVerifier()
        router.push({ name: 'AnuncioReservado' })
      }
    }
  }

  function deletarReserva(id) {
    const position = userReservas.findIndex((novaReserva) => novaReserva.id == id)
    console.log(position, userReservas)
    userReservas.splice(position, 1)
    toggleCancelarModal()
    reservasEmptyVerifier()
    showAlert()
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
    deletarReserva,
    cancelarReservaModal,
    toggleCancelarModal,
    cancelarReservaId,
    isReservasEmpty,
    reservasEmptyVerifier
  }
})