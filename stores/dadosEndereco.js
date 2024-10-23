import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEtapa } from './dadosEtapa'

export const useEndereco = defineStore('endereco', () => {
  const dadosEndereco = reactive ({
    id: 0,
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

  function publicarAnuncio() {
    if (dadosEndereco.titulo == '' || dadosEndereco.preco == '' || dadosEndereco.imgs == []) {
      campoVazioAlert.value = true
      return
    }
  }

  const anunciosCriados = ref([])

  const etapaStore = useEtapa()

  //VERIFICACAO DO FORMULARIO -------------------------------------------------------------------
  let campoVazioAlert = ref(false)

  function verificarFormulario() {
    // if (dadosEndereco.pais == '' || dadosEndereco.rua == '' || dadosEndereco.numero == '' || dadosEndereco.bairro == '' || dadosEndereco.estado == '' || dadosEndereco.cidade == '' || dadosEndereco.cep == '') {
    //   campoVazioAlert.value = true
    // } else {
      // campoVazioAlert.value = false
      etapaStore.proximaEtapa()
    // }
  }

  function atualizarDados(novosDados) {
    this.dadosEndereco = { ...this.dadosEndereco, ...novosDados }
  }

  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert,
    atualizarDados,
    publicarAnuncio
  }
})
