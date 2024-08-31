import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import AnunciarPage from './AnunciarPage.vue'

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
