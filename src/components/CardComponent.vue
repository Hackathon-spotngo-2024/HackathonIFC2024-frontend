<script setup>
import { useEndereco } from '../../stores/dadosEndereco';

const enderecoStore = useEndereco()
</script>

<template>
  <div class="card">
    <router-link to="/anuncio" class="link">
      <div class="card-img"><img :src="enderecoStore.dadosEndereco.imgs[0]" alt="" /></div>
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
  margin: 1rem auto;
  width: 90%;
  max-width: 400px;
  border: 0;
}

.card-infos {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.card-img>img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.card-titulo {
  font-family: 'Montserrat', sans-serif;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: bold;
}

.card-preco {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.card-loc {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: var(--cor-fonte-loc);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: none;
    margin: 1rem;
  }

  .card-titulo,
  .card-preco,
  .card-loc {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {

  .card-titulo,
  .card-preco,
  .card-loc {
    font-size: 0.8rem;
  }

  .card-img>img {
    border-radius: 10px;
  }
}

.link {
  text-decoration: none;
  color: black;
}
</style>
