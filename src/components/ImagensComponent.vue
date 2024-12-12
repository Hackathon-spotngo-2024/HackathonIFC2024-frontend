<script setup>
import { useNavbar } from '@/stores/dadosNavbar'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const navbarStore = useNavbar()
const props = defineProps({
  anuncio: {
    type: Object,
    Required: true
  }
})
</script>

<template>
  <div class="imagens-container" v-if="!navbarStore.isTelaMobile">
    <div class="imagem-grande" id="left-radius"><img :src="props.anuncio.imgs[0]" alt="" /></div>
    <div class="imagem-pequena"><img :src="props.anuncio.imgs[1]" alt="" /></div>
    <div class="imagem-pequena" id="top-right-radius">
      <img id="top-right-radius" :src="props.anuncio.imgs[2]" alt="" />
    </div>
    <div class="imagem-pequena"><img :src="props.anuncio.imgs[3]" alt="" /></div>
    <div class="imagem-pequena" id="bottom-right-radius">
      <img id="bottom-right-radius" :src="props.anuncio.imgs[4]" alt="" />
    </div>
  </div>

  <carousel class="carousel" :items-to-show="1" v-if="navbarStore.isTelaMobile">
    <slide v-for="(imagem, index) in props.anuncio.imgs" :key="index">
      <img class="carousel-img" :src="imagem" alt="">
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<style scoped>
.carousel {
  width: 500px;
}

.carousel-img {
  background-color: lightgray;
  height: 400px;
  width: 500px;
  height: 400px;
  border-radius: 15px;
}

.imagens-container {
  display: grid;
  grid-template-areas:
    'imagem-grande imagem-pequena imagem-pequena'
    'imagem-grande imagem-pequena imagem-pequena';
  gap: 10px;
  width: 1000px;
}

.imagem-grande {
  grid-area: imagem-grande;
  background-color: lightgray;
  height: 490px;
  width: 500px;
  border-radius: 15px 0 0 15px;
}

.imagem-grande img {
  width: 100%;
  height: 100%;
  border-radius: 15px 0 0 15px;
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

img {
  transition: 250ms ease-in-out;
}

img:hover {
  cursor: pointer;
  filter: brightness(0.7);
}

#top-right-radius {
  border-radius: 0 15px 0 0;
}

#top-right-radius {
  width: 100%;
  height: 100%;
}

#bottom-right-radius {
  border-radius: 0 0 15px 0;
}

@media (max-width: 1100px) {
  .imagens-container {
    scale: 0.85;
  }
}

@media (max-width: 990px) {
  .imagens-container {
    scale: 0.7;
  }
}
@media (max-width: 540px) {
  .carousel, .carousel-img {
    width: 100dvw;
    height: 380px;
  }
  .navigation {
    display: none;
    overflow: hidden;
  }
}
</style>
