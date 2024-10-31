<script setup>
import { ref, onMounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
import NavbarMobileComponent from './components/NavbarMobileComponent.vue'
import { useNavbar } from '@/stores/dadosNavbar'

const navbarStore = useNavbar()
const modal = ref(false)

function openModal() {
    modal.value = true
}

// Chama trocarNavbar 
onMounted(() => {
    navbarStore.trocarNavbar() // Verifica o tamanho inicial da tela
})
</script>

<template>
  <!-- Alterna entre Navbar normal e mobile conforme o tamanho da tela -->
  <component :is="navbarStore.isTelaPequena ? NavbarMobileComponent : NavbarComponent" @openModal="openModal"/>
  <router-view></router-view>
</template>

<style scoped>

</style>

 
