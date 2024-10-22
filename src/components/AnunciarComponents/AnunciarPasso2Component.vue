<script setup>
import { onMounted, ref, watch } from 'vue'
import L from 'leaflet' //Importando biblioteca Leaflet (mapa)
import 'leaflet/dist/leaflet.css' //Importa o css da biblioteca
import BotaoAvancarEVoltarComponent from '../BotaoAvancarEVoltarComponent.vue'
import { useEndereco } from '../../../stores/dadosEndereco'

const enderecoStore = useEndereco()

const tituloEtapa2 = ref('Onde fica sua locação?')
const enderecoSearch = ref('')
const sugestoes = ref([])
let map
let marker
const showForm = ref(false)
const todosCamposVazios = Object.values(enderecoStore.dadosEndereco).every((campo) => campo === '') //Verifica se TODOS os campos do formulario estao vazios (retorna false 1 ou mais estiverem preenchidos)
const algumCampoPreenchido = Object.values(enderecoStore.dadosEndereco).some((campo) => campo != '') //Verifica se qualquer campo esta preenchido

watch(
  () => showForm,
  enderecoStore.dadosEndereco,
  (newValue) => {
    console.log(newValue)
  },
  { deep: true }
)

onMounted(() => {
  if (todosCamposVazios) {
    showForm.value = false //se todos estao vazios, o formulario nao aparece
  }
  else if (algumCampoPreenchido) {
    showForm.value = true //se algum esta preenchido, o formulario aparece
  }})

defineProps({
  proximaEtapa: Function,
  etapaAnterior: Function
})

//MAPA -------------------------------------

onMounted(() => {
  // Inicializa o mapa
  map = L.map('map').setView([-26.3044, -48.8455], 13) //Inicia o mapa em Joinville - SC

  // Adiciona "camada de azulejos" do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
})

//MAPA ------------------------------------------------------------------------------------------------------------
const trazerSugestoes = async () => {
  if (enderecoSearch.value.length < 3) {
    sugestoes.value = []
    return
  }
  try {
    console.log('Buscando sugestoes para: ', enderecoSearch.value)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${enderecoSearch.value}&addressdetails=1&limit=5`
    )
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status} -  ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Sugestoes recebidas: ', data)

    sugestoes.value = data
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error)
  }
}

const selecionarSugestao = (suggestion) => {
  const lat = suggestion.lat
  const lon = suggestion.lon
  showForm.value = true

  // Extrai as partes do endereço
  const { road, house_number, suburb, city, state, country, postcode } = suggestion.address
  ;(enderecoStore.dadosEndereco.pais = country || ''),
    (enderecoStore.dadosEndereco.rua = road || ''),
    (enderecoStore.dadosEndereco.numero = house_number || ''),
    (enderecoStore.dadosEndereco.bairro = suburb || ''),
    (enderecoStore.dadosEndereco.estado = state || ''),
    (enderecoStore.dadosEndereco.cidade = city || ''),
    (enderecoStore.dadosEndereco.cep = postcode || '')

  const enderecoFormatado = formatarEndereco(enderecoStore.dadosEndereco)

  // Centraliza o mapa nas coordenadas da sugestão selecionada
  map.setView([lat, lon], 13)

  // Adiciona ou atualiza o marcador
  if (marker) {
    marker.setLatLng([lat, lon])
  } else {
    marker = L.marker([lat, lon]).addTo(map)
  }

  marker.bindPopup(enderecoFormatado).openPopup()

  // Limpa as sugestões e atualiza o campo de pesquisa
  sugestoes.value = []
  enderecoSearch.value = enderecoFormatado
}

// Formata o endereco para mostrar apenas os dados a seguir (a API mostra dados a mais se nao formatada)
const formatarEndereco = (endereco) => {
  return [
    endereco.numero,
    endereco.rua,
    endereco.bairro,
    endereco.cidade,
    endereco.estado,
    endereco.pais,
    endereco.cep
  ]
    .filter((parte) => parte.trim() !== '')
    .join(', ') // Caso o dado nao seja informado (geralmente o numero), ele nao aparece, evitando "virgulas fantasmas"
}
</script>

<template>
  <section class="etapa-2-container">
    <div class="titulo-principal-container">
      <h1 v-html="tituloEtapa2" class="titulo-etapa-2"></h1>
    </div>
    <div class="subtitulo-container">
      <p class="subtitulo">Insira o endereço pelo mapa.</p>
    </div>

    <!-- MAPA -->
    <div class="search-and-map-container">
      <input
        class="search-endereco"
        v-model="enderecoSearch"
        @input="trazerSugestoes"
        type="text"
        placeholder="Digite o seu endereço"
      />
      <ul v-if="sugestoes.length" class="autocomplete-list">
        <li
          v-for="(sugestao, index) in sugestoes"
          :key="index"
          @click="selecionarSugestao(sugestao)"
        >
          <i class="fa-solid fa-building-flag"></i>
          {{
            formatarEndereco({
              numero: sugestao.address.house_number || '',
              rua: sugestao.address.road || '',
              bairro: sugestao.address.suburb || '',
              cidade: sugestao.address.city || '',
              estado: sugestao.address.state || '',
              pais: sugestao.address.country || '',
              cep: sugestao.address.postcode || ''
            })
          }}
        </li>
      </ul>
      <div id="map" class="maps-container"></div>
      <!--Mapa da API LeafLet-->
    </div>

    <!-- FORMULÁRIO COM DADOS DO ENDEREÇO -->
    <form class="form-endereco" v-if="showForm == true">
      <div class="pais-wrapper">
        <label for="pais-input">País</label>
        <input type="text" name="pais" id="pais-input" v-model="enderecoStore.dadosEndereco.pais" />
      </div>
      <div class="endereco-info">
        <div class="info-wrapper">
          <label for="estado-input">Estado</label>
          <input
            type="text"
            name="estado"
            id="estado-input"
            v-model="enderecoStore.dadosEndereco.estado"
          />
        </div>
        <div class="linha-divisoria"></div>
        <div class="info-wrapper">
          <label for="cidade-input">Cidade</label>
          <input
            type="text"
            name="cidade"
            id="cidade-input"
            v-model="enderecoStore.dadosEndereco.cidade"
          />
        </div>
        <div class="linha-divisoria"></div>
        <div class="info-wrapper">
          <label for="bairro-input">Bairro</label>
          <input
            type="text"
            name="bairro"
            id="bairro-input"
            v-model="enderecoStore.dadosEndereco.bairro"
          />
        </div>
        <div class="linha-divisoria"></div>
        <div class="info-wrapper">
          <label for="rua-input">Rua</label>
          <input type="text" name="rua" id="rua-input" v-model="enderecoStore.dadosEndereco.rua" />
        </div>
        <div class="linha-divisoria"></div>
        <div class="info-wrapper">
          <label for="numero-input">Número</label>
          <input
            type="text"
            name="numero"
            id="numero-input"
            v-model="enderecoStore.dadosEndereco.numero"
          />
        </div>
        <div class="linha-divisoria"></div>
        <div class="info-wrapper">
          <label for="cep-input">CEP</label>
          <input
            type="number"
            name="cep"
            id="cep-input"
            v-model="enderecoStore.dadosEndereco.cep"
          />
        </div>
      </div>
    </form>
    <div class="campo-vazio-alert" v-if="enderecoStore.campoVazioAlert == true">
      <p class="campo-vazio-text">Preencha todos os campos para prosseguir.</p>
    </div>

    <!-- BOTÕES -->
    <BotaoAvancarEVoltarComponent @avancar="enderecoStore.verificarFormulario" />
  </section>
</template>

<style scoped>
.etapa-2-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
}

.titulo-principal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subtitulo {
  color: var(--cor-fonte-loc);
  font-size: 1rem;
}

.maps-container {
  width: 500px;
  height: 480px;
  background-color: gray;
  border-radius: 20px;
}

.form-endereco {
  margin-top: 2rem;
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

.info-wrapper {
  border: 0;
}

.pais-wrapper > input,
.info-wrapper > input {
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

.endereco-info {
  border: 1px solid var(--cor-bordas-input);
  border-radius: 10px;
}

.linha-divisoria {
  width: 100%;
  background-color: var(--cor-bordas-input);
  height: 1px;
}

#map {
  height: 400px;
  width: 100%;
  margin-top: 1rem;
}

.search-endereco {
  width: calc(500px - 16px);
  height: 40px;
  border: 1px solid var(--cor-bordas-input);
  border-radius: 20px 20px 20px 20px;
  padding: 0 8px 0 8px;
  outline: 0;
  transition: 50ms ease-in-out;
}

.search-endereco:not(:placeholder-shown) {
  border-radius: 20px 20px 0 0;
  transition: 700ms ease-in-out;
}

.autocomplete-list {
  width: 500px;
  list-style-type: none;
  padding: 0;
  border: 1px solid var(--cor-bordas-input);
  border-top: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border-radius: 0 0 20px 20px;
}

.autocomplete-list li {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background-color: #f0f0f0;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
