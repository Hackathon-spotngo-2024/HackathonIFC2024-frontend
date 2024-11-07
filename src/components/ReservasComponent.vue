<script setup>
import { useReserva } from '../../stores/dadosReserva';

const reservaStore = useReserva()
</script>

<template>
  <div class="container-reservas">
    <h1>Minhas Reservas</h1>
    <div class="cartao-reserva" v-for="(reserva, index) in reservaStore.userReservas" :key="index">
      <img :src="reserva.imagem" alt="Salão de casamento" class="imagem-reserva"/>
      <div class="detalhes-reserva">
        <h2>{{ reserva.titulo }}</h2>
        <p>De {{ reserva.dataInicio }} a {{ reserva.dataFim }}</p>
        <p><i class="fas fa-map-marker-alt"></i> {{ reserva.localizacao }}</p>
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
  justify-content: space-between;
  align-items: center;
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
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.botao-detalhes:hover {
  background-color: #f0f0f0;
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