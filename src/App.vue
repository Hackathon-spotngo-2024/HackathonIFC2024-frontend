<script setup>
import { ref } from 'vue';
import BannerComponent from './components/BannerComponent.vue';
import CadastroComponent from './components/CadastroComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

const modal = ref(false)


function openModal() {
 modal.value = true
}
</script>

<template>
  <NavbarComponent @openModal="openModal()"/>
  <BannerComponent/>
  <CadastroComponent :modal="modal" @closeModal="modal=false"/>
 </template>
 
 
 <style scoped>
 
 
 </style>
 
