import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEtapa } from './dadosEtapa'

export const useEndereco = defineStore('endereco', () => {
  const dadosEndereco = reactive ({
    pais: '',
    rua: '',
    numero: '',
    bairro: '',
    estado: '',
    cidade: '',
    cep: '',
    LimiteVisitantes: 0,
    preco: '',
    titulo: '',
    descricao: '',
    imgs: []
  })

  const etapaStore = useEtapa()

  //VERIFICACAO DO FORMULARIO -------------------------------------------------------------------
  let campoVazioAlert = ref(false)

  function verificarFormulario() {
  //   if (dadosEndereco.value.pais == '' || dadosEndereco.value.rua == '' || dadosEndereco.value.numero == '' || dadosEndereco.value.bairro == '' || dadosEndereco.value.estado == '' || dadosEndereco.value.cidade == '' || dadosEndereco.value.cep == '') {
  //     campoVazioAlert.value = true
  //   } else {
  //     campoVazioAlert.value = false
      etapaStore.proximaEtapa()
  //   }
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
