<script setup>
import CadastroComponent from '@/components/CadastroComponent.vue'
import { ref } from 'vue'
import { useEndereco } from '../../stores/dadosEndereco'
import CardFicticioComponent from '@/components/CardFicticioComponent.vue'

const enderecoStore = useEndereco()

const isModalOpen = ref(false)
function openModal() {
  isModalOpen.value = true
}
</script>

<template>
  <CadastroComponent :openModal="openModal" />
  <BannerComponent />
  <CardSectionTitle />
  <div class="card-container">
    <CardFicticioComponent />
    <CardFicticioComponent />
    <CardFicticioComponent />
    <CardComponent v-for="anuncio in enderecoStore.anunciosCriados" :key="anuncio.id" />
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
