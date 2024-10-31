import { createRouter, createWebHistory } from 'vue-router'
import AnunciarPage from '../views/AnunciarPage.vue'
import HomePage from '../views/HomePage.vue'
import AnuncioPage from "../views/AnuncioPage.vue"
import ReservasPage from "../views/ReservasPage.vue"
import AnuncioFicticioPage from '@/views/AnuncioFicticioPage.vue'
import AnuncioPublicadoPage from '@/views/AnuncioPublicadoPage.vue'

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
      path: "/anuncio/",
      name: "AnuncioPage",
      component: AnuncioPage,
    },
    {
     path: "/minhas-reservas",
     name: "ReservasPage",
     component: ReservasPage,
    },
    {
      path: "/anuncio-ficticio",
      name: "AnuncioFicticio",
      component: AnuncioFicticioPage,
    },
    {
      path: "/anuncio-publicado",
      name: "AnuncioPublicado",
      component: AnuncioPublicadoPage,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})

export default router
