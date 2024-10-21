<script setup>
import { ref } from 'vue';
import { useEndereco } from '../../stores/dadosEndereco';

const enderecoStore = useEndereco()

const fileInput = ref(null)
const onFileChange = (event) => {
  const files = event.target.files
  enderecoStore.dadosEndereco.imgs = []

  enderecoStore.dadosEndereco.imgs = Array.from(files)

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imageUrl = URL.createObjectURL(file)
    enderecoStore.dadosEndereco.imgs.push(imageUrl)
  }
}

const selectFile = () => {
  fileInput.value.click()
}
</script>

<template>
  <div class="container">
    <input type="file" @change="onFileChange" multiple accept="image/*" ref="fileInput">
    <div class="escolher-arquivos" @click="selectFile"><img src="../assets/add-image.png" alt=""></div>
    <div class="container-imagens">
      <div class="imagem" v-for="(img, index) in enderecoStore.dadosEndereco.imgs" :key="index">
        <img v-if="img" :src="img">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  display: none;
}

.escolher-arquivos {
  display: flex;
  justify-content: center;
}

.escolher-arquivos img {
  width: 15%;
  cursor: pointer;
}

.imagem img {
  width: 100px;
  height: 100px;
}
</style>
