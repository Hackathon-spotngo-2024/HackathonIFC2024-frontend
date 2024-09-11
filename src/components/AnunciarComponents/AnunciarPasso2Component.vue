<script setup>
import { onMounted, ref, watch } from 'vue'

const tituloEtapa2 = ref('Onde fica sua locação?')
const inserirManualmente = ref(false)
const tituloEnderecoForm = ref('Insira seu endereço')
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
  <div class="etapa-2-container">
    <div class="infos-container">
      <div class="titulo-principal-container">
        <h1 class="titulo-etapa-2">{{ tituloEtapa2 }}</h1>
      </div>
      <div class="subtitulo-container">
        <p class="subtitulo">Insira o endereço pelo mapa ou manualmente.</p>
      </div>
      <!-- Aqui ficará o mapa da API do Google Maps -->
      <div class="maps-container"></div>
      <!-- Aqui ficará o mapa da API do Google Maps -->
      <button class="inserir-manualmente-btn" @click="inserirManualmenteTrue">
        Inserir maualmente
      </button>
      <div class="endereco-form-container" v-if="inserirManualmente == true">
        <h1 class="titulo-endereco-form">{{ tituloEnderecoForm }}</h1>
        <form class="infos-endereco-container">
          <div class="pais-wrapper">
            <label for="pais">País</label>
            <!--Esperar receber a key da Coutry State City API-->
            <input type="text" name="pais" id="pais-input" v-model="dadosEndereco.pais" />
          </div>
          <div class="endereco-info">
            <div class="info-wrapper">
              <label for="endereco">Endereço</label>
              <input type="text" name="endereco" id="endereco-input" v-model="dadosEndereco.endereco" />
            </div>
            <div class="info-wrapper">
              <label for="numero">Número</label>
              <input type="text" name="numero" id="numero-input" v-model="dadosEndereco.numero" />
            </div>
            <div class="info-wrapper">
              <label for="bairro">Bairro</label>
              <input type="text" name="bairro" id="bairro-input" v-model="dadosEndereco.bairro" />
            </div>
            <div class="info-wrapper">
              <label for="estado">Estado</label>
              <input type="text" name="estado" id="estado-input" v-model="dadosEndereco.estado" />
            </div>
            <!--Mudar para campo select-->
            <div class="info-wrapper">
              <label for="cidade">Cidade</label>
              <input type="text" name="cidade" id="cidade-input" v-model="dadosEndereco.cidade" />
            </div>
            <div class="info-wrapper">
              <label for="cep">CEP</label>
              <input type="number" name="cep" id="cep-input" v-model="dadosEndereco.cep" />
            </div>
          </div>
        </form>
        <div class="avancar-btn-container">
          <button class="avancar-btn" @click="proximaEtapa">Avançar</button>
        </div>
      </div>
      <button class="etapaAnterior" @click="etapaAnterior">Voltar</button>
    </div>
  </div>
</template>

<style scoped>
.etapa-2-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infos-container {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.titulo-principal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.subtitulo {
  color: var(--cor-fonte-loc);
  font-size: 1rem
}

.maps-container {
  width: 500px;
  height: 480px;
  background-color: gray;
  border-radius: 20px;
}

.inserir-manualmente-btn {
  align-self: end;
  width: 150px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0);
  color: var(--cor-principal);
  border: 0;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  padding: 4px;
  transition: ease-in-out 250ms;
}

.titulo-endereco-form {
  margin-bottom: 2rem;
}

.inserir-manualmente-btn:hover {
  background-color: rgba(230, 230, 230);
  color: var(--cor-principal);
}

.inserir-manualmente-btn:active {
  transform: scale(1.05);
}

.endereco-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infos-endereco-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pais-wrapper,
.info-wrapper {
  border: solid 1px var(--cor-bordas-input);
  width: 500px;
  height: 68px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.pais-wrapper>input,
.info-wrapper>input {
  width: 500px;
  border: 0;
  border-radius: 10px;
  outline: none;
  align-self: center;
  height: 100%;
  padding-left: 16px;
  padding-top: 0;
  box-sizing: border-box;
  margin-bottom: 8px;
  font-size: 16px;
}

label {
  font-size: 12px;
  color: var(--cor-bordas-input);
  margin: 8px 0 0 16px;
}

.endereco-info {}
</style>
