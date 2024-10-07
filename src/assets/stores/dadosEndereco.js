import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEtapa } from './dadosEtapa'

export const useEndereco = defineStore('endereco', () => {
  const dadosEndereco = ref({
    pais: '',
    rua: '',
    numero: '',
    bairro: '',
    estado: '',
    cidade: '',
    cep: '',
    LimiteHospedes: 0,
    preco: ''
  })

  const etapaStore = useEtapa()

  //VERIFICACAO DO FORMULARIO -------------------------------------------------------------------
  let campoVazioAlert = ref(false)

  function verificarFormulario() {
    if (dadosEndereco.value.pais == '' || dadosEndereco.value.rua == '' || dadosEndereco.value.numero == '' || dadosEndereco.value.bairro == '' || dadosEndereco.value.estado == '' || dadosEndereco.value.cidade == '' || dadosEndereco.value.cep == '') {
      campoVazioAlert.value = true
      console.log(dadosEndereco.value)
    } else {
      etapaStore.proximaEtapa()
    }
  }
  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert
  }
})
