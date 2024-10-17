<script setup>
</script>

<template>
  <div class="container">
    <div class="imagem-grande" id="left-radius"></div>
    <div class="imagem-pequena"></div>
    <div class="imagem-pequena" id="top-right-radius"></div>
    <div class="imagem-pequena"></div>
    <div class="imagem-pequena" id="bottom-right-radius"></div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-areas: 
    "imagem-grande imagem-pequena imagem-pequena"
    "imagem-grande imagem-pequena imagem-pequena";
  gap: 10px;
  width: 1000px;
}

.imagem-grande {
  grid-area: imagem-grande;
  background-color: lightgray; /* Troque pelo background ou imagem real */
  height: 490px; /* Altura maior para um visual mais quadrado */
  width: 500px;  /* Largura igual para manter proporção quadrada */
}

.imagem-pequena {
  background-color: lightgray; /* Troque pelo background ou imagem real */
  height: 240px; /* Altura e largura iguais para imagens pequenas quadradas */
  width: 240px;
}

#left-radius {
  border-radius: 20px 0 0 20px;
}

#top-right-radius {
  border-radius: 0 20px 0 0;
}

#bottom-right-radius {
  border-radius: 0 0 20px 0;
}
</style>
