<script setup>

import { useEndereco } from '../../stores/dadosEndereco';

const enderecoStore = useEndereco()

const onFileChange = (event) => {
  const files = event.target.files

  enderecoStore.dadosEndereco.imgs = Array.from(files) 
}
</script>

<template>
  <input type="file" @change="onFileChange" multiple accept="image/*">

  <div class="container" v-if="enderecoStore.dadosEndereco.imgs.length">
    <div class="imgs-container" v-for="(img, index) in enderecoStore.dadosEndereco.imgs" :key="index">
      <img :src="URL.createObjectURL(img)" :alt="'Imagem ' + (index + 1)">
    </div>
  </div>
</template>

<style scoped>

</style>
