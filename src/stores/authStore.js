import { defineStore } from "pinia";
import api from '../services/api';

export const useAuthStore = defineStore('auth', () => {
    state: () => ({
        token: null,
        user: null,
    })
    
    async login(credentials) {
        try {
            const response = await api.post('token/login/', credentials);
            this.token = response.data.auth_token;
            api.defaults.headers.common['Authorization'] = `Token ${this.token}`;
            await this.fetchUser();
        } catch (error) {
            console.log('Erro ao fazer login:', error);
        }
    }
        
    async fetchUser() {
        try {
            const response = await api.get('user/me/');
            this.user = response.data;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    }
},
});