<script setup>
import { ref } from 'vue';
import BannerComponent from './components/BannerComponent.vue';
import CadastroComponent from './components/CadastroComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import RodapeComponent from './components/RodapeComponent.vue';

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
