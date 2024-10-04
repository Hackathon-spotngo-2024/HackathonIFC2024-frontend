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
    cep: ''
  })

  const etapaStore = useEtapa()

  //VERIFICACAO DO FORMULARIO -------------------------------------------------------------------
  let campoVazioAlert = ref(false)

  function verificarFormulario() {
    if (Object.values(dadosEndereco.value).some((value) => value == '')) {
      campoVazioAlert.value = true
    } else {
      etapaStore.proximaEtapa()
      console.log(etapaStore.etapaAtual)
    }
  }
  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert
  }
})
