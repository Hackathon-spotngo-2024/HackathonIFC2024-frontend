import { defineStore } from 'pinia'
import api from '../services/api'
import { ref } from 'vue'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)
  const user = ref(null)
  const errorMessage = ref(null)
  const errorCode = ref(null)
  const userApproved = ref(false)
  const isAuthenticated = ref(false)
  const userFirstLetter = ref(null)

  const getFirstLetter = (name) => {
    userFirstLetter.value = name.substr(0, 1)
    window.localStorage.setItem('UserFirstLetter', userFirstLetter.value)
  }

  function showAlert() {
    Swal.fire({
      title: 'Login efetuado.',
      text: "Agora você pode desfrutar do Spot 'n go!",
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  const login = async (credentials) => {
    try {
      const response = await api.post('/api/token/', credentials)
      accessToken.value = response.data.access
      refreshToken.value = response.data.refresh
      localStorage.setItem('accessToken', accessToken.value)
      localStorage.setItem('refreshToken', refreshToken.value)
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
      await fetchUser()
    } catch (error) {
      errorCode.value = error.response?.status
      const errors = error.response.data //(objeto)
      if (errors) {
        errorCode.value = error.response?.status
        console.log(errorCode.value)
        if (errorCode.value == 401) errorMessage.value = 'Usuário e/ou senha incorreto(s)'
      } else errorMessage.value = 'Ocorreu um erro desconhecido. Tente novamente'
    }
  }

  const register = async (userData) => {
    try {
      const response = await api.post('users/', userData)
      if (response.status === 200 || response.status === 201) userApproved.value = true
      console.log(response.status)
    } catch (error) {
      console.log('Erro ao registrar usuário.', error.response?.data)
      const errors = error.response.data //(objeto)
      if (errors) {
        errorCode.value = error.response?.status
        console.log(errorCode.value)
        if (errors.password) errorMessage.value = errors.password[0]
        else if (errors.email) errorMessage.value = errors.email[0]
        else if (errors.username) errorMessage.value = errors.username[0]
        else if (errors.non_field_errors) errorMessage.value = errors.non_field_errors[0]
        else errorMessage.value = 'Ocorreu um erro desconhecido. Tente novamente'
      } else errorMessage.value = 'Erro ao registrar usuário. Tente novamente'
    }
  }

  const fetchUser = async () => {
    try {
      const response = await api.get('me/')
      user.value = response.data
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.response?.data)
    }
  }

  const logout = async () => {
    console.log(!!accessToken.value)
    try {
      accessToken.value = null
      refreshToken.value = null
      user.value = null
      delete api.defaults.headers.common['Authorization']
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      window.location.href = '/' //redireciona para página home para recarregar e atualizar o icone do perfil
    } catch (error) {
      console.log('Erro ao fazer logout', error.response.data[0])
    }
  }

  const refreshTokenHandler = async () => {
    try {
      const response = await api.post('/api/token/refresh/', {
        refresh: refreshToken.value
      })
      accessToken.value = response.data.access
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
    } catch (error) {
      console.log('Erro ao atualizar token:', error)
      await this.logout()
    }
  }

  return {
    accessToken,
    user,
    login,
    register,
    fetchUser,
    logout,
    refreshTokenHandler,
    errorMessage,
    errorCode,
    userApproved,
    showAlert,
    isAuthenticated,
    getFirstLetter,
    userFirstLetter
  }
})
