import { defineStore } from 'pinia'
import api from '../services/api'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)
  const user = ref(null)
  const errorMessage = ref(null)
  const errorCode = ref(null)
  const userApproved = ref(false)


  const login = async (credentials) => {
    try {
      const response = await api.post('/api/token/', credentials)
      accessToken.value = response.data.access
      refreshToken.value = response.data.refresh
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
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
      accessToken.value = null
      refreshToken.value = null
      user.value = null
      delete api.defaults.headers.common['Authorization']
    } catch (error) {
      console.log('Erro ao fazer logout', error.response.data[0])
    }
  }

  const refreshTokenHandler = async () => {
    try {
      const response = await api.post('/api/token/refresh/', {
        refresh: refreshToken.value,
      })
      accessToken.value = response.data.access
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
    } catch (error) {
      console.log('Erro ao atualizar token:', error)
      await this.logout()
    }
  }

  return { accessToken, user, login, register, fetchUser, logout, refreshTokenHandler, errorMessage, errorCode, userApproved }
})
