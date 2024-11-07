<script setup>
import { onMounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
import NavbarMobileComponent from './components/NavbarMobileComponent.vue'
import { useNavbar } from '@/stores/dadosNavbar'
import RodapeComponent from './components/RodapeComponent.vue'

const navbarStore = useNavbar()

onMounted(() => {
  navbarStore.trocarNavbar()
})
</script>

<template>
  <header>
    <component
      :is="navbarStore.isTelaPequena ? NavbarMobileComponent : NavbarComponent"
      @openModal="openModal"
    />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <RodapeComponent />
  </footer>
</template>

<style scoped></style>
