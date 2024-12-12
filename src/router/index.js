import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import AnunciarPage from '../views/AnunciarPage.vue'
import HomePage from '../views/HomePage.vue'
import AnuncioPage from '../views/AnuncioPage.vue'
import ReservasPage from '../views/ReservasPage.vue'
import AjudaPage from '../router/AjudaPage.vue'
import SobrePage from '../router/SobrePage.vue'
import TermosPage from '../router/TermosPage.vue'
import AnuncioFicticioPage from '@/views/AnuncioFicticioPage.vue'
import AnuncioPublicadoPage from '@/views/AnuncioPublicadoPage.vue'
import AnuncioReservadoPage from '@/views/AnuncioReservadoPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/anunciar',
      name: 'AnunciarPage',
      component: AnunciarPage,
      meta: { requiresAuth: true }
    },
    {
      path: "/anuncio/:id",
      name: "AnuncioPage",
      component: AnuncioPage,
    },
    {
      path: '/minhas-reservas',
      name: 'ReservasPage',
      component: ReservasPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/ajuda',
      name: 'AjudaPage',
      component: AjudaPage
    },
    {
      path: '/sobre',
      name: 'SobrePage',
      component: SobrePage
    },
    {
      path: '/termos',
      name: 'TermosPage',
      component: TermosPage
    },
    {
      path: "/anuncio-ficticio/:id",
      name: "AnuncioFicticio",
      component: AnuncioFicticioPage,
    },

    {
      path: '/anuncio-publicado',
      name: 'AnuncioPublicado',
      component: AnuncioPublicadoPage
    },
    {
      path: '/anuncio-reservado',
      name: 'AnuncioReservado',
      component: AnuncioReservadoPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    }
  ],

  scrollBehavior(to, from) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) authStore.isAuthenticated = true
  console.log('rota:', to.path, 'isAuthenticated:', authStore.isAuthenticated);

  if (to.meta.requiresAuth && authStore.isAuthenticated == false) {
    return next({ path: '/login' });
  } else {
    next();
  }
});

export default router
