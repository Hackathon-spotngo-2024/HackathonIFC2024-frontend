<script setup>
import { useNavbar } from '@/stores/dadosNavbar'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import 'flowbite'

onMounted(() => {
  initFlowbite()
})

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

  <div
    id="default-carousel"
    class="relative w-full"
    data-carousel="slide"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          :src="props.anuncio.imgs[0]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          :src="props.anuncio.imgs[1]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          :src="props.anuncio.imgs[2]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          :src="props.anuncio.imgs[3]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          :src="props.anuncio.imgs[4]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
      ></button>
    </div>
  </div>
</template>

<style scoped>
@import 'flowbite';
@tailwind base;
@tailwind components;
@tailwind utilities;

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
</style>
