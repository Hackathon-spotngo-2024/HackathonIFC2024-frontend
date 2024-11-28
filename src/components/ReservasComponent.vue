<script setup>
import { useReserva } from '../stores/dadosReserva'
import { useEndereco } from '@/stores/dadosEndereco'
import { ref } from 'vue'

const enderecoStore = useEndereco()
const reservaStore = useReserva()

function subtractDate(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000
  const difference = date1.getTime() - date2.getTime()
  return Math.round(difference / oneDay)
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const daysUntil = subtractDate(new Date(reservaStore.datasReserva.dataInicio), new Date())
const totalDays = subtractDate(
  new Date(reservaStore.datasReserva.dataTermino),
  new Date(reservaStore.datasReserva.dataInicio)
)
const totalPrice = totalDays * Number(enderecoStore.dadosAnuncio.preco)

const details = ref(false)
const showDetails = () => {
  details.value = !details.value
}
</script>

<template>
  <div class="container-reservas">
    <div class="cartao-reserva" v-for="(reserva, index) in reservaStore.userReservas" :key="index">
      <img :src="reserva.imgs[0]" alt="Salão de casamento" class="imagem-reserva" />
      <div class="detalhes-reserva">
        <h2>{{ reserva.titulo }}</h2>
        <p>
          De <strong>{{ formatDate(reservaStore.datasReserva.dataInicio) }}</strong> à
          <strong>{{ formatDate(reservaStore.datasReserva.dataTermino) }}</strong>
        </p>
        <p>
          Faltam <strong>{{ daysUntil }}</strong> dias para você poder aproveitar sua reserva!🎈
        </p>
        <p>
          Valor total: <strong>R${{ totalPrice }},00</strong>
        </p>
        <div class="pais-estado">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ reserva.cidade + ', ' + reserva.estado }}</p>
        </div>
        <button class="botao-detalhes" @click="showDetails">Ver detalhes</button>
          <transition name="fade">
        <div v-if="details" class="detalhes-endereco">
          <ul class="endereco-completo">
            <li>
              <strong>Localidade:</strong> {{ enderecoStore.dadosAnuncio.cidade }},
              {{ enderecoStore.dadosAnuncio.estado }}, {{ enderecoStore.dadosAnuncio.pais }}
            </li>
            <li>
            <strong>Endereco:</strong> {{ enderecoStore.dadosAnuncio.rua }},
              {{ enderecoStore.dadosAnuncio.numero }}, {{ enderecoStore.dadosAnuncio.bairro }}
            </li>
            <li><strong>CEP:</strong> {{ enderecoStore.dadosAnuncio.cep }}</li>
          </ul>
        </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-reservas {
  display: flex;
  width: 80%;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.cartao-reserva {
  height: 220px;
  display: flex;
  align-items: start;
  padding: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.detalhes-container {
  display: flex;
  align-items: center;
}

.imagem-reserva {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.detalhes-reserva {
  margin-left: 20px;
  transition: all 300ms ease-in-out;
}

.detalhes-reserva:hover {
  transform: translateX(10px);
}

h2 {
  margin: 0;
  font-size: 1.5em;
}

.detalhes-reserva p {
  margin: 5px 0;
  font-size: 14px;
}

.botao-detalhes {
  font-weight: 500;
  background-color: #e9e9e9;
  color: black;
  border: 0;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: 200ms ease-in-out;
}

.botao-detalhes:hover {
  background-color: #d8d8d8;
}

.botao-detalhes:active {
  background-color: #b4b4b4;
  transition: 180ms ease-in-out;
}

.pais-estado {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: row;
}

.endereco-completo {
  margin-top: .5rem;
  list-style: none;
}

.endereco-completo li {
  font-size: 14px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .cartao-reserva {
    flex-direction: column;
    align-items: flex-start;
  }

  .botao-detalhes {
    align-self: flex-end;
    margin-top: 10px;
  }
}
</style>
