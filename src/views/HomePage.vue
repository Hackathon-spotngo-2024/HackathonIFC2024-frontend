<script setup>
import { useEndereco } from '../stores/dadosEndereco'
import CardFicticioComponent from '@/components/CardFicticioComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import CardSectionTitle from '@/components/CardSectionTitle.vue'
import CardComponent from '@/components/CardComponent.vue'

const enderecoStore = useEndereco()
</script>

<template>
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
