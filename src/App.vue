<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
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
