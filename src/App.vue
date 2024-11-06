<script setup>
import { ref } from 'vue';

const modal = ref(false)

function openModal() {
 modal.value = true
}
</script>

<template>
  <NavbarComponent @openModal="openModal()"/>
  <router-view></router-view>
  <RodapeComponent />
 </template>

 <style scoped>
 
 </style>
 
