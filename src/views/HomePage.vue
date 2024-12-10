<script setup>
import { useEndereco } from '../stores/dadosEndereco'
import CardFicticioComponent from '@/components/CardFicticioComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import CardSectionTitle from '@/components/CardSectionTitle.vue'
import CardComponent from '@/components/CardComponent.vue'
import { useAnuncioFicticio } from '@/stores/anuncoFicticio'

const enderecoStore = useEndereco()
const anuncioFicticioStore = useAnuncioFicticio()
</script>

<template>
  <BannerComponent />
  <CardSectionTitle />
  <div class="card-container">
    <CardFicticioComponent v-for="anuncio in anuncioFicticioStore.anuncios" :key="anuncio.id" :anuncio="anuncio"/> <!--FUNCIONANDO-->
    <CardComponent v-for="anuncio in enderecoStore.anunciosCriados" :key="anuncio.id" :anuncio="anuncio"/>
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
