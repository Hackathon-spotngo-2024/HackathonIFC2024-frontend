<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet' //Importando biblioteca Leaflet (mapa)
import 'leaflet/dist/leaflet.css' //Importa o css da biblioteca

const tituloEtapa2 = ref('Onde fica sua locação?')
const dadosEndereco = ref({
  pais: '',
  rua: '',
  numero: '',
  bairro: '',
  estado: '',
  cidade: '',
  cep: ''
})
const enderecoSearch = ref('')
const sugestoes = ref([])
let map
let marker

defineProps({
  proximaEtapa: Function,
  etapaAnterior: Function
})

onMounted(() => {
  // Inicializa o mapa
  map = L.map('map').setView([-26.3044, -48.8455], 13) //Inicia o mapa em Joinville - SC

  // Adiciona "camada de azulejos" do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
})

const trazerSugestoes = async () => {
  if (enderecoSearch.value.length < 3) {
    sugestoes.value = []
    return
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${enderecoSearch.value}&addressdetails=1&limit=5`
    )
    const data = await response.json()
    sugestoes.value = data
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error)
  }
}

const selecionarSugestao = (suggestion) => {
  const lat = suggestion.lat
  const lon = suggestion.lon

  // Extrai as partes do endereço
  const { house_number, road, suburb, city, state, country, postcode } = suggestion.address
  dadosEndereco.value = {
    pais: country || '',
    rua: road || '',
    numero: house_number || '',
    bairro: suburb || '',
    estado: state || '',
    cidade: city || '',
    cep: postcode || ''
  }
  const enderecoFormatado =
    `${dadosEndereco.value.numero}, ${dadosEndereco.value.rua}, ${dadosEndereco.value.bairro}, ${dadosEndereco.value.cidade}, ${dadosEndereco.value.estado}, ${dadosEndereco.value.pais}, ${dadosEndereco.value.cep}`
      .replace(/(^[,\s]+)|([,\s]+$)/g, '')
      .replace(/,+/g, ',')

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
</script>

<template>
  <div class="etapa-2-container">
    <div class="infos-container">
      <div class="titulo-principal-container">
        <h1 class="titulo-etapa-2">{{ tituloEtapa2 }}</h1>
      </div>
      <div class="subtitulo-container">
        <p class="subtitulo">Insira o endereço pelo mapa.</p>
      </div>
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
            {{ sugestao.display_name }}
          </li>
        </ul>
        <div id="map" class="maps-container"></div>
        <!--Mapa da API LeafLet-->
      </div>
      <div class="botoes-wrapper">
        <button class="voltar-btn" @click="etapaAnterior">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
        <button class="avancar-btn" @click="proximaEtapa">Avançar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.etapa-2-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.infos-container {
  margin-top: 6rem;
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

/* .inserir-manualmente-btn {
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
  margin-top: 2rem;
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
} */

.linha-divisoria {
  width: 100%;
  background-color: var(--cor-bordas-input);
  height: 1px;
}

.botoes-wrapper {
  display: flex;
  width: 100%;
  justify-content: start;
  gap: 10px; /* Medida exata para o avancar-btn ficar centralizado (500 - 70 - 350 - 10px) */
  flex-direction: row;
}

.voltar-btn {
  margin-top: 2rem;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  border: 0;
  color: black;
  background-color: var(--cor-voltar-btn);
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.voltar-btn:hover {
  background-color: var(--cor-voltar-btn-hover);
  transform: scale(1.03);
}

.fa-solid.fa-arrow-right-from-bracket {
  transform: rotate(180deg);
}

.avancar-btn {
  margin-top: 2rem;
  width: 350px;
  height: 70px;
  background-color: var(--cor-principal);
  border-radius: 40px;
  border: 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.avancar-btn:hover {
  background-color: var(--cor-principal-hover);
  transform: scale(1.01);
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
</style>
