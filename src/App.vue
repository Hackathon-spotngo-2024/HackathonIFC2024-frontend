<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
</script>

<template>
  <header>
    <NavbarComponent/>
  </header>
  <router-view></router-view>

  <footer>
    <RodapeComponent/>
  </footer>

</template>

<style scoped>

</style>
