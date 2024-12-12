<script setup>
import { onMounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
import NavbarMobileComponent from './components/NavbarMobileComponent.vue'
import { useNavbar } from './stores/dadosNavbar'
import RodapeComponent from './components/RodapeComponent.vue'
import { useAuthStore } from './stores/authStore'

const navbarStore = useNavbar()
const authStore = useAuthStore()

onMounted(() => {
  navbarStore.trocarNavbar()
})
</script>

<template>
  <header>
    <component
      :is="navbarStore.isTelaPequena && authStore.isAuthenticated ? NavbarMobileComponent : NavbarComponent"
    />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <RodapeComponent v-if="authStore.isAuthenticated"/>
  </footer>
</template>

<style scoped>
</style>
