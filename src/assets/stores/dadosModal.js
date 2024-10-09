import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useModal = defineStore('modal', () => {
  const dadosUser = reactive({
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    dataDeNascimento: '',
    cpf: ''
  })
  const showRegisterModal = ref(false)
  const showLoginModal = ref(false)
  
  function openLoginModal() {
    showLoginModal.value = true
  }

  function openRegisterModal() {
    showRegisterModal.value = true
  }

  const closeLoginModal = () => {
    showLoginModal.value = false
  }

  const closeRegisterModal = () => {
    showRegisterModal.value = false
  }
  return { dadosUser, showRegisterModal, showLoginModal, openRegisterModal, openLoginModal, closeRegisterModal, closeLoginModal }
})
