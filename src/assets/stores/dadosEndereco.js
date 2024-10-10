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
    LimiteVisitantes: 0,
    preco: ''
  })

  const etapaStore = useEtapa()

  //VERIFICACAO DO FORMULARIO -------------------------------------------------------------------
  let campoVazioAlert = ref(false)

  function verificarFormulario() {
    if (dadosEndereco.value.pais == '' || dadosEndereco.value.rua == '' || dadosEndereco.value.numero == '' || dadosEndereco.value.bairro == '' || dadosEndereco.value.estado == '' || dadosEndereco.value.cidade == '' || dadosEndereco.value.cep == '') {
      campoVazioAlert.value = true
    } else {
      etapaStore.proximaEtapa()
    }
  }

  function atualizarDados(novosDados) {
    this.dadosEndereco = { ...this.dadosEndereco, ...novosDados }
  }
  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert,
    atualizarDados
  }
})
