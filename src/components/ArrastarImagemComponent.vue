<script setup>
import { useImg } from '../../stores/imgStore'

const imgStore = useImg()
</script>

<template>
  <div class="container">
    <div class="topo">
      <p>Arraste e solte suas imagens</p>
    </div>
    <div
      class="area-arrastar"
      @dragover.prevent="imgStore.onDragOver"
      @dragleave.prevent="imgStore.onDragLeave"
      @drop.prevent="imgStore.onDrop"
    >
      <span v-if="!imgStore.isDragging">
        Arraste e solte aqui ou
        <span class="select" role="button" @click="imgStore.selectFiles">Escolha</span>
      </span>
      <div v-else class="select">Solte as imagens aqui</div>
      <input
        type="file"
        name="file"
        class="file"
        ref="imgStore.fileInputRef"
        multiple
        @change="imgStore.onFileSelect"
      />
    </div>
    <div class="container-imagens">
      <div class="imagem">
        <span class="deletar">&times;</span>
        <img />
      </div>
    </div>
    <button class="upload" type="button">Upload</button>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  padding: 10px;
  box-shadow: 0 0 5px #ffdfdf;
  border-radius: 5px;
  overflow: hidden;
}

.container .topo {
  text-align: center;
}

.container p {
  font-weight: bold;
  color: red;
}

.container button {
  outline: 0;
  border: 0;
  color: white;
  border-radius: 4px;
  font-weight: 400;
  padding: 8px 13px;
  width: 100%;
  background: red;
}

.container .area-arrastar {
  height: 150px;
  border-radius: 5px;
  border: 2px dashed red;
  background: #f4f3f9;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: center;
  -webkit-user-select: none;
  margin-top: 10px;
}

.container .area-arrastar .visible {
  font-size: 18px;
}

.container .select {
  color: purple;
  margin-left: 5px;
  cursor: pointer;
}

.card .select:hover {
  opacity: 0.6;
}

.container .container-imagens {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 200px;
  position: relative;
  margin-bottom: 8px;
}

.container .container-imagens .imagem {
    width: 75px;
    margin-right: 5px;
    height: 75px;
    position: relative;
    margin-bottom: 8px;
}

.container .container-imagens .imagem img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.container .container-imagens .imagem span {
    position: absolute;
    top: -2px;
    right: 9px;
    font-size: 20px;
    cursor: pointer;
}

.container input, .container .area-arrastar .on-drop, .container .area-arrastar.dragover .visible {
    display: none;
}

.delete {
    z-index: 999;
    color: red;
}

.upload {
    cursor: pointer;
}
</style>
