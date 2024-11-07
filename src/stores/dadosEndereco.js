import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEtapa } from './dadosEtapa'
import { useRouter } from 'vue-router'

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
    limiteVisitantes: 0,
    preco: '',
    titulo: '',
    descricao: '',
    imgs: []
  })

  let campoVazioAlert = ref(false)
  const etapaStore = useEtapa()
  const router = useRouter()

  const anunciosCriados = ref([])
  const dadosAnuncio = ref(null)

  function setarDadosLocalStorage() {
    window.localStorage.setItem('DadosEndereco', JSON.stringify(dadosEndereco))
  }

  function addAnuncio() {
   if (dadosEndereco.titulo == '' || dadosEndereco.preco == '' || dadosEndereco.imgs == []) {
      campoVazioAlert.value = true
      return
    } else {
      const stringDados = window.localStorage.getItem('DadosEndereco')
      dadosAnuncio.value = JSON.parse(stringDados)
      
      dadosAnuncio.value.id = anunciosCriados.value.length + 1
      anunciosCriados.value.push({ ...dadosAnuncio.value })

      setarDadosLocalStorage()
      window.localStorage.setItem('DadosAnuncio', JSON.stringify(anunciosCriados.value))
      
      etapaStore.etapaAtual = 0
      
      for (const key in dadosEndereco) {
        if (typeof dadosEndereco[key] == 'string') dadosEndereco[key] = ''
        else if (typeof dadosEndereco[key] == 'number') dadosEndereco[key] = 0
        else dadosEndereco[key] = []
      }
      router.push({ name: "AnuncioPublicado" })
  }
  }

  function verificarFormulario() {
    if (dadosEndereco.pais == '' || dadosEndereco.rua == '' || dadosEndereco.numero == '' || dadosEndereco.bairro == '' || dadosEndereco.estado == '' || dadosEndereco.cidade == '' || dadosEndereco.cep == '') {
      campoVazioAlert.value = true
    } else {
    campoVazioAlert.value = false
    etapaStore.proximaEtapa()
    }
  }

  return {
    dadosEndereco,
    verificarFormulario,
    campoVazioAlert,
    addAnuncio,
    setarDadosLocalStorage,
    anunciosCriados,
    dadosAnuncio,
  }
})
