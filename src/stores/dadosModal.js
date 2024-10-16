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
  const isUserLogado = ref(false)
  const campoLoginVazio = ref(false)

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

  function atualizarLocalStorage() {
    window.localStorage.setItem('UserLogado', String(isUserLogado.value));
  }

  function logarUser() {
    isUserLogado.value = true
    atualizarLocalStorage()
  }

  function verificarLogin() {
    if (dadosUser.email == '' || dadosUser.senha == '') {
      campoLoginVazio.value = true
    }
    else {
      campoLoginVazio.value = false

    }
  }

  function logar() {
    verificarLogin()
    console.log(campoLoginVazio.value)
    if (campoLoginVazio.value == true) return
    else {
      logarUser()
      closeLoginModal()
    }
  }

  return { dadosUser, showRegisterModal, showLoginModal, isUserLogado, campoLoginVazio, openRegisterModal, openLoginModal, closeRegisterModal, closeLoginModal, logarUser, logar }
})
