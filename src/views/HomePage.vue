<script setup>
import CadastroComponent from '@/components/CadastroComponent.vue';
import { ref } from 'vue'
const isModalOpen = ref(false)
function openModal () {
  isModalOpen.value = true
}

</script>

<template>
  <CadastroComponent :openModal="openModal" />
  <BannerComponent />
  <CardSectionTitle />
  <div class="card-container">
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 3rem;
}
</style>
