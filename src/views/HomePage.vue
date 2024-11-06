<script setup>
import { ref } from 'vue'
import { useEndereco } from '../../stores/dadosEndereco'
import { useModal } from '../../stores/dadosModal'
import CadastroComponent from '@/components/CadastroComponent.vue'
import CardFicticioComponent from '@/components/CardFicticioComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import CardSectionTitle from '@/components/CardSectionTitle.vue'
import CardComponent from '@/components/CardComponent.vue'

const enderecoStore = useEndereco()
const modalStore = useModal()

const isModalOpen = ref(false)
function openModal() {
  isModalOpen.value = true
}
</script>

<template>
  <LoginComponent v-if="modalStore.showLoginModal"/>
  <CadastroComponent v-if="modalStore.showRegisterModal"/>
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
