<script setup>
import { useReserva } from '../../stores/dadosReserva'

const reservaStore = useReserva()
</script>

<template>
  <div class="container-reservas">
    <div class="cartao-reserva" v-for="(reserva, index) in reservaStore.userReservas" :key="index">
      <img :src="reserva.imgs[0]" alt="Salão de casamento" class="imagem-reserva" />
      <div class="detalhes-reserva">
        <h2>{{ reserva.titulo }}</h2>
        <p>De {{ reservaStore.datasReserva.dataInicio }} à {{ reservaStore.datasReserva.dataTermino }}</p>
        <p><i class="fas fa-map-marker-alt"></i> {{ reserva.cidade + ", " + reserva.estado }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-reservas {
  width: 80%;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.cartao-reserva {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
}

.imagem-reserva {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
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

p {
  margin: 5px 0;
}
</style>
