import { createRouter, createWebHistory } from 'vue-router'
import AnunciarPage from './AnunciarPage.vue'
import HomePage from './HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/',
      name: 'AnunciarPage',
      component: AnunciarPage,
    },
  ]
})

export default router
