import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEtapa } from './dadosEtapa'

export const useEndereco = defineStore('endereco', () => {
  const dadosEndereco = reactive({
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

  let campoVazioAlert = ref(false)
  const etapaStore = useEtapa()

  const anunciosCriados = ref([])

  function setarDadosLocalStorage() {
    window.localStorage.setItem('DadosEndereco', JSON.stringify(dadosEndereco)) // Apresenta os dados preenchidos no local Storage
  }

  function addAnuncio() {
    if (dadosEndereco.titulo == '' || dadosEndereco.preco == '' || dadosEndereco.imgs == []) {
      campoVazioAlert.value = true
      return
    } else {
      const stringDados = window.localStorage.getItem('DadosEndereco') // Pega os dados que estao atualmente no storage
      const dadosAnuncio = JSON.parse(stringDados) // Os dados vem em string, JSON.parse() os transforma em objeto
      console.log('StringDados: ' + stringDados)
      
      anunciosCriados.value.push(dadosAnuncio) // Pusha o objeto dos dados para o array de anuncios
      dadosAnuncio.id = anunciosCriados.value.length // Determina o id para o numero de anuncios que tem (ex: se tem 2 anuncios, o id do primeiro ja passou por aqui e é 1, o segundo passou de novo e é 2)
      console.log(anunciosCriados)

      setarDadosLocalStorage() // Coloca os dados no localStorage
      window.localStorage.setItem('DadosAnuncio', JSON.stringify(dadosAnuncio))
    }
  }

  function verificarFormulario() {
    // if (dadosEndereco.pais == '' || dadosEndereco.rua == '' || dadosEndereco.numero == '' || dadosEndereco.bairro == '' || dadosEndereco.estado == '' || dadosEndereco.cidade == '' || dadosEndereco.cep == '') {
    //   campoVazioAlert.value = true
    // } else {
    // campoVazioAlert.value = false
    etapaStore.proximaEtapa()
    // }
  }

  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert,
    addAnuncio,
    setarDadosLocalStorage
  }
})
