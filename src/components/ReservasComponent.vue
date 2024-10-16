<script setup>
const reservas = [
        {
         titulo: 'Salão para casamento',
         dataInicio: '20/09/23',
         dataFim: '25/09/23',
         localizacao: 'Vila Nova - Jlle',
         imagem: 'src/assets/card-imgs/card-img-1.jpeg'
        },
        {
         titulo: 'Salão para casamento',
         dataInicio: '20/09/23',
         dataFim: '25/09/23',
         localizacao: 'Vila Nova - Jlle',
         imagem: 'src/assets/card-imgs/card-img-1.jpeg'
        },
        {
         titulo: 'Salão para casamento',
         dataInicio: '20/09/23',
         dataFim: '25/09/23',
         localizacao: 'Vila Nova - Jlle',
         imagem: 'src/assets/card-imgs/card-img-1.jpeg'
        }
];
</script>

<template>
  <div class="container-reservas">
    <h1>Minhas Reservas</h1>
    <div class="cartao-reserva" v-for="(reserva, index) in reservas" :key="index">
      <img :src="reserva.imagem" alt="Salão de casamento" class="imagem-reserva"/>
      <div class="detalhes-reserva">
        <h2>{{ reserva.titulo }}</h2>
        <p>De {{ reserva.dataInicio }} a {{ reserva.dataFim }}</p>
        <p><i class="fas fa-map-marker-alt"></i> {{ reserva.localizacao }}</p>
        <button class="botao-detalhes">Ver mais detalhes</button>
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
}

h2 {
  margin: 0;
  font-size: 1.5em;
}

p {
  margin: 5px 0;
}

.botao-detalhes {
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.botao-detalhes:hover {
  background-color: #0000FF ;
}
</style>
