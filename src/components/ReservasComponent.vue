<script setup>
import { useReserva } from '../stores/dadosReserva'
import { ref } from 'vue'
const reservaStore = useReserva()

function subtractDate(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000
  const difference = date1.getTime() - date2.getTime()
  return Math.round(difference / oneDay)
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const details = ref([])
const showDetails = (index) => {
  details.value[index] = !details.value[index]
}
</script>

<template>
  <div class="container-reservas">
    <div class="cartao-reserva" v-for="(reserva, index) in reservaStore.userReservas" :key="index">
      <img :src="reserva.imgs[0]" class="imagem-reserva" />
      <div class="detalhes-reserva">
        <h2>{{ reserva.titulo }}</h2>
        <p>
          De <strong>{{ formatDate(reserva.dataInicio) }}</strong> à
          <strong>{{ formatDate(reserva.dataTermino) }}</strong>
        </p>
        <p>
          Faltam
          <strong>{{ subtractDate(new Date(reserva.dataInicio), new Date()) }}</strong>
          dias para você poder aproveitar sua reserva!🎈
        </p>
        <p>
          Valor total:
          <strong
            >R${{
              subtractDate(new Date(reserva.dataTermino), new Date(reserva.dataInicio)) *
              Number(reserva.preco)
            }},00</strong
          >
        </p>
        <div class="pais-estado">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ reserva.cidade + ', ' + reserva.estado }}</p>
        </div>
        <button class="botao-detalhes" @click="showDetails(index)">Ver detalhes</button>
        <button class="cancelar-reserva" @click="reservaStore.toggleCancelarModal(reserva.id)">
          Cancelar reserva
        </button>
        <transition name="fade">
          <div v-if="details[index]" class="detalhes-endereco">
            <ul class="endereco-completo">
              <li>
                <strong>Localidade:</strong> {{ reserva.cidade }}, {{ reserva.estado }},
                {{ reserva.pais }}
              </li>
              <li>
                <strong>Endereco:</strong> {{ reserva.rua }}, {{ reserva.numero }},
                {{ reserva.bairro }}
              </li>
              <li><strong>CEP:</strong> {{ reserva.cep }}</li>
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
  flex-direction: column;
  height: 100vh;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.cartao-reserva {
  height: fit-content;
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
  margin-top: 0.5rem;
  list-style: none;
}

.endereco-completo li {
  font-size: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cancelar-reserva {
  border: 0;
  font-weight: 500;
  font-size: 14px;
  margin-left: 8px;
  padding: 8px;
  background-color: var(--cor-botao-cancelar);
  border-radius: 5px;
  color: whitesmoke;
  transition: 200ms ease-in-out;
}

.cancelar-reserva:hover {
  cursor: pointer;
  background-color: var(--cor-botao-cancelar-hover);
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
