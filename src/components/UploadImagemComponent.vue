<script setup>
import { ref } from 'vue'
import { useEndereco } from '../stores/dadosEndereco'

const enderecoStore = useEndereco()
const fileInput = ref(null)
const numImagens = 5

const onFileChange = (event) => {
  const files = event.target.files
  // enderecoStore.dadosEndereco.imgs = []
  const selectedFiles = Array.from(files)

  if (selectedFiles.length != numImagens) {
    console.log(selectedFiles.length)
    alert('Você deve adicionar 5 imagens ao seu anúncio.')
    return
  } else {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const imageUrl = URL.createObjectURL(file)
      enderecoStore.dadosEndereco.imgs.push(imageUrl)
    }
  }
}

const selectFile = () => {
  fileInput.value.click()
}
</script>

<template>
  <div class="container">
    <input type="file" @change="onFileChange" multiple accept="image/*" ref="fileInput" />
    <div class="escolher-arquivos" @click="selectFile">
      <img src="../assets/add-image.png" alt="" />
    </div>

    <div class="container-imagens" v-if="enderecoStore.dadosEndereco.imgs.length">
      <div class="imagem" v-for="(img, index) in enderecoStore.dadosEndereco.imgs" :key="index">
        <img v-if="img" :src="img" />
      </div>
    </div>
    <div class="aviso-resolucao-container">
      <p class="aviso-resolucao">Resolução recomendada: 500x500</p>
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
  width: 50px;
  cursor: pointer;
}

.container-imagens {
  margin: 0.5rem 0 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  border: 3px dashed var(--cor-principal);
  border-radius: 15px;
  padding: 10px;
}

.aviso-resolucao-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.aviso-resolucao {
  margin: 10px 0 10px 0;
}

.imagem img {
  width: 100px;
  height: 100px;
}
</style>
