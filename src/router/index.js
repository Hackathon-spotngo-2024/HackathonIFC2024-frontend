import { createRouter, createWebHistory } from 'vue-router'
import AnunciarPage from '../views/AnunciarPage.vue'
import HomePage from '../views/HomePage.vue'
import AnuncioPage from "../views/AnuncioPage.vue"
import ReservasPage from "../views/ReservasPage.vue"
import AjudaPage from "../router/AjudaPage.vue"
import SobrePage from "../router/SobrePage.vue"
import TermosPage from "../router/TermosPage.vue"
import AnuncioFicticioPage from '@/views/AnuncioFicticioPage.vue'
import AnuncioPublicadoPage from '@/views/AnuncioPublicadoPage.vue'
import AnuncioReservadoPage from '@/views/AnuncioReservadoPage.vue'

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
     path: "/ajuda",
     name: "AjudaPage",
     component: AjudaPage
    },
    {
      path: "/sobre",
      name: "SobrePage",
      component: SobrePage,
    },
    {
      path: "/termos",
      name: "TermosPage",
      component: TermosPage,
    },
    {
      path: "/anuncio-ficticio/:id",
      name: "AnuncioFicticio",
      component: AnuncioFicticioPage,
    },

    {
      path: "/anuncio-publicado",
      name: "AnuncioPublicado",
      component: AnuncioPublicadoPage,
    },
    {
      path: "/anuncio-reservado",
      name: "AnuncioReservado",
      component: AnuncioReservadoPage,
    },
  ],
  scrollBehavior(to, from) {
    return { top: 0 };
  }
})

export default router
