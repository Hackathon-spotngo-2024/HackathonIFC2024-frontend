<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import RodapeComponent from './components/RodapeComponent.vue'

</script>

<template>
  <header>
    <NavbarComponent @openModal="openModal()" />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <RodapeComponent />
  </footer>
</template>

<style scoped></style>
