<script setup>
import { ref } from 'vue';

const modal = ref(false)

function openModal() {
 modal.value = true
}
</script>

<template>
  <header>
    <NavbarComponent @openModal="openModal()"/>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <RodapeComponent />
  </footer>
</template>

 <style scoped>
 </style>
