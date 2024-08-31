import { createRouter, createWebHistory } from 'vue-router'
import AnunciarPage from './AnunciarPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    },
    {
      path: '/',
      name: 'AnunciarPage',
      component: AnunciarPage,
    },
  ]
})

export default router
