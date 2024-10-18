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
  const campoCadastroVazio = ref(false)

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
    if (campoLoginVazio.value == true) return
    else {
      logarUser()
      closeLoginModal()
    }
  }

  
  function verificarCadastro() {
    if (dadosUser.nome == '' || dadosUser.email == '' || dadosUser.senha == '' || dadosUser.confirmarSenha == '' ||dadosUser.telefone == '' || dadosUser.dataDeNascimento == '' || dadosUser.cpf == '' ) {
      campoCadastroVazio.value = true
    }
    else {
      campoCadastroVazio.value = false
    }
  }



  function cadastrar() {
    verificarCadastro()
    if (campoCadastroVazio.value == true) return
    else {
      logarUser()
      closeRegisterModal()
    }
  } 


  return { dadosUser, showRegisterModal, showLoginModal, isUserLogado, campoLoginVazio, campoCadastroVazio, openRegisterModal, openLoginModal, closeRegisterModal, closeLoginModal, logarUser, logar, cadastrar }
})
