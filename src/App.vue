<script setup>
import { ref } from 'vue';
import BannerComponent from './components/BannerComponent.vue';
import CadastroComponent from './components/CadastroComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import RodapeComponent from './components/RodapeComponent.vue';

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
 
