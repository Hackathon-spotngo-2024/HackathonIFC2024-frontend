import { defineStore } from 'pinia'
import { ref } from 'vue'

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
  return {
    dadosEndereco
  }
})
