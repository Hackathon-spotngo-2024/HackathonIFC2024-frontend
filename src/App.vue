<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <RodapeComponent />
  </footer>
</template>

<style scoped></style>
