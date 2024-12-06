import { defineStore } from 'pinia'
import api from '../services/api'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)

  const login = async (credentials) => {
    try {
      const response = await api.post('token/login/', credentials)
      token.value = response.data.auth_token
      api.defaults.headers.common['Authorization'] = `Token ${token.value}`
      await fetchUser()
    } catch (error) {
      console.log('Erro ao fazer login:', error)
    }
  }

  const fetchUser = async () => {
    try {
      const response = await api.get('user/me/')
      user.value = response.data
    } catch (error) {
      console.error('Erro ao buscar usuário:', error)
    }
  }

  const logout = async () => {
    try {
      await api.post('token/logout/')
      token.value = null
      user.value = null
      delete api.defaults.headers.common['Authorization']
    } catch (error) {
      console.log('Erro ao fazer logout', error)
    }
  }

  return { token, user, login, fetchUser, logout }
})
