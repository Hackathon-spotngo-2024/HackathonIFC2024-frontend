<script setup>
import { useModal } from '@/stores/dadosModal';
import CadastroComponent from '@/components/CadastroComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';

const modalStore = useModal()
</script>

<template>
  <LoginComponent v-if="modalStore.showLoginModal"/>
  <CadastroComponent v-if="modalStore.showRegisterModal"/>
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
