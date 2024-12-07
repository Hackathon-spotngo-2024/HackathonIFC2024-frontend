import { defineStore } from 'pinia'
import api from '../services/api'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)
  const errorMessage = ref(null)
  const errorCode = ref(null)
  const userApproved = ref(false)


  const login = async (credentials) => {
    try {
      const response = await api.post('token/login/', credentials)
      token.value = response.data.auth_token
      api.defaults.headers.common['Authorization'] = `Token ${token.value}`
      await fetchUser()
    } catch (error) {
      console.log('Erro ao fazer login:', error.response?.data)
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
        else if(errors.non_field_errors) errorMessage.value = errors.non_field_errors[0]
        else errorMessage.value = 'Ocorreu um erro desconhecido. Tente novamente.'
      }
      else errorMessage.value = 'Erro ao registrar usuário. Tente novamente.'
    }
  }

  const fetchUser = async () => {
    try {
      const response = await api.get('user/me/')
      user.value = response.data
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.response?.data)
    }
  }

  const logout = async () => {
    try {
      await api.post('token/logout/')
      token.value = null
      user.value = null
      delete api.defaults.headers.common['Authorization']
    } catch (error) {
      console.log('Erro ao fazer logout', error.response.data[0])
    }
  }

  return { token, user, login, register, fetchUser, logout, errorMessage, errorCode, userApproved }
})
