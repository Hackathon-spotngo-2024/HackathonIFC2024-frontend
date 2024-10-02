<script setup>
import imgCard1 from '../assets/card-imgs/card-img-1.jpeg'
</script>

<template>
  <div class="card">
      <router-link to="/anuncio" class="link">
        <div class="card-img"><img :src="imgCard1" alt="" /></div>
      <div class="card-infos">
        <div class="card-titulo">Exemplo titulo</div>
        <div class="card-preco">R$xx,xx por dia</div>
        <div class="card-loc">Exemplo localização</div>
      </div>
    </router-link>
    </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin: 1rem 6rem 0 6rem;
  width: fit-content;
  border: 0;
}

.card-infos {
  display: flex;
  flex-direction: column;
}

.card-img>img {
  width: 300px;
  height: 300px;
  border-radius: 15px;
}

.card-titulo {
  font-family: 'Montserrat';
  margin: 0.5rem 0 .5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
}

.card-preco {
  font-family: 'Montserrat';
  font-weight: 500;
  margin: 0 0 .5rem 1rem;
  font-size: 1rem;
}

.card-loc {
  font-family: 'Montserrat';
  font-weight: 500;
  color: var(--cor-fonte-loc);
  font-size: 1rem;
  margin: 0 0 0 1rem;
}
.link {
  text-decoration: none;
  color: black;
}
</style>
