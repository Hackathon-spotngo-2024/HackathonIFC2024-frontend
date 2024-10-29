import { createRouter, createWebHistory } from 'vue-router'
import AnunciarPage from '../views/AnunciarPage.vue'
import HomePage from '../views/HomePage.vue'
import AnuncioPage from "../views/AnuncioPage.vue"
import ReservasPage from "../views/ReservasPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/anunciar',
      name: 'AnunciarPage',
      component: AnunciarPage,
    },
    {
      path: "/anuncio/:id",
      name: "AnuncioPage",
      component: AnuncioPage,
    },
    {
     path: "/Reservas",
     name: "ReservasPage",
     component: ReservasPage,
    },
  ]
})

export default router
