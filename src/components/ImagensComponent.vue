<script setup>
import { useEndereco } from '../stores/dadosEndereco';

const enderecoStore = useEndereco()
</script>

<template>
  <div class="imagens-container">
    <div class="imagem-grande" id="left-radius"><img :src="enderecoStore.dadosAnuncio.imgs[0]" alt=""></div>
    <div class="imagem-pequena"><img :src="enderecoStore.dadosAnuncio.imgs[1]" alt=""></div>
    <div class="imagem-pequena" id="top-right-radius"><img id="top-right-radius" :src="enderecoStore.dadosAnuncio.imgs[2]" alt=""></div>
    <div class="imagem-pequena"><img :src="enderecoStore.dadosAnuncio.imgs[3]" alt=""></div>
    <div class="imagem-pequena" id="bottom-right-radius"><img id="bottom-right-radius" :src="enderecoStore.dadosAnuncio.imgs[4]" alt=""></div>
  </div>
</template>

<style scoped>
.imagens-container {
  display: grid;
  grid-template-areas: 
    "imagem-grande imagem-pequena imagem-pequena"
    "imagem-grande imagem-pequena imagem-pequena";
  gap: 10px;
  width: 1000px;
}

.imagem-grande {
  grid-area: imagem-grande;
  background-color: lightgray;
  height: 490px;
  width: 500px;
  border-radius: 20px 0 0 20px;
}

.imagem-grande img {
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
}

.imagem-pequena {
  background-color: lightgray;
  height: 240px;
  width: 240px;
}

.imagem-pequena img {
  width: 100%;
  height: 100%;
}

#top-right-radius {
  border-radius: 0 20px 0 0;
}

#top-right-radius {
  width: 100%;
  height: 100%;
} 

#bottom-right-radius {
  border-radius: 0 0 20px 0;
}
</style>
