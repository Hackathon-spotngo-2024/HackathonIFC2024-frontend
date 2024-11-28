<script setup>
import { useEndereco } from '../stores/dadosEndereco'
import { useModal } from '../stores/dadosModal'
import LoginComponent from '@/components/LoginComponent.vue'
import CadastroComponent from '@/components/CadastroComponent.vue'
import CardFicticioComponent from '@/components/CardFicticioComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import CardSectionTitle from '@/components/CardSectionTitle.vue'
import CardComponent from '@/components/CardComponent.vue'
import { useAnuncioFicticio } from '@/stores/anuncoFicticio'

const enderecoStore = useEndereco()
const modalStore = useModal()
const anuncioFicticioStore = useAnuncioFicticio()
</script>

<template>
  <LoginComponent v-if="modalStore.showLoginModal"/>
  <CadastroComponent v-if="modalStore.showRegisterModal"/>
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
