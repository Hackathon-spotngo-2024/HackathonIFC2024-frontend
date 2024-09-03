<script setup>
import { onMounted, ref, watch } from 'vue'

const tituloEtapa2 = ref('Onde fica sua locação?')
const inserirManualmente = ref(false)
const tituloEnderecoManual = ref('Insira seu endereço')
const dadosEndereco = ref({
  pais: '',
  endereco: '',
  numero: '',
  bairro: '',
  estado: '',
  cidade: '',
  cep: ''
})

onMounted(() => {
  const dadosEnderecoSalvo = JSON.parse(localStorage.getItem('dadosEndereco'))
  if (dadosEnderecoSalvo) {
    dadosEndereco.value = dadosEnderecoSalvo
  }
  const inserirManualmenteSalvo = localStorage.getItem('inserirManualmente') === 'true'
  inserirManualmente.value = inserirManualmenteSalvo
})

watch(
  [dadosEndereco, inserirManualmente],
  ([newDadosEndereco, newInserirManualmente]) => {
    localStorage.setItem('dadosEndereco', JSON.stringify(newDadosEndereco))
    localStorage.setItem('inserirManualmente', JSON.stringify(newInserirManualmente))
  },
  { deep: true }
)

defineProps({
  proximaEtapa: Function,
  etapaAnterior: Function
})

function inserirManualmenteTrue() {
  inserirManualmente.value = !inserirManualmente.value
}
</script>

<template>
  <div class="container">
    <h1 class="titulo-etapa-2">{{ tituloEtapa2 }}</h1>
    <p class="subtitulo">Insira o endereço pelo mapa ou manualmente.</p>
    <!-- Aqui ficará o mapa da API do Google Maps -->
    <button class="inserir-manualmente-btn" @click="inserirManualmenteTrue">
      Inserir maualmente
    </button>
    <div class="endereco-manual-container" v-if="inserirManualmente == true">
      <h1 class="titulo-endereco-manual">{{ tituloEnderecoManual }}</h1>
      <div class="endereco-container">
        <div class="pais-container">
          <label for="pais">País</label>
          <!--Esperar receber a key da Coutry State City API-->
          <input type="text" name="pais" id="pais-input" v-model="dadosEndereco.pais" />
        </div>
        <form class="infos-endereco-container">
          <label for="endereco">Endereço</label>
          <input type="text" name="endereco" id="endereco-input" v-model="dadosEndereco.endereco" />
          <label for="numero">Número</label>
          <input type="text" name="numero" id="numero-input" v-model="dadosEndereco.numero" />
          <label for="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro-input" v-model="dadosEndereco.bairro" />
          <label for="estado">Estado</label>
          <input type="text" name="estado" id="estado-input" v-model="dadosEndereco.estado" />
          <!--Mudar para campo select-->
          <label for="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade-input" v-model="dadosEndereco.cidade" />
          <label for="cep">CEP</label>
          <input type="number" name="cep" id="cep-input" v-model="dadosEndereco.cep" />
        </form>
      </div>
      <div class="avancar-btn-container">
        <button class="avancar-btn" @click="proximaEtapa">Avançar</button>
      </div>
    </div>
    <button class="etapaAnterior" @click="etapaAnterior">Voltar</button>
  </div>
</template>

<style scoped></style>
