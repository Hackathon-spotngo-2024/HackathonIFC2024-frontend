<script setup>
import { useEndereco } from '../../stores/dadosEndereco'

const enderecoStore = useEndereco()
</script>

<template>
  <div class="card">
    <router-link to="anuncio" class="link">
      <div class="card-img">
        <img :src="enderecoStore.dadosAnuncio.imgs[0]" alt="" />
      </div>
      <div class="card-infos">
        <div class="card-titulo">{{ enderecoStore.dadosAnuncio.titulo }}</div>
        <div class="card-preco">{{ 'R$' + enderecoStore.dadosAnuncio.preco + ',00' }}</div>
        <div class="card-loc">
          {{ enderecoStore.dadosAnuncio.cidade + ', ' + enderecoStore.dadosAnuncio.estado }}
        </div>
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
  align-items: flex-start;
  transform: translateX(0);
  transition: all 400ms ease-in-out;
}

.card-infos:hover {
  transform: translateX(10px);
}

.card-img>img {
  width: 350px;
  height: 300px;
  border-radius: 15px;
  transition: 300ms ease-in-out;
}

.card-img>img:hover {
  transform: scale(1.01);
}

.card-titulo {
  font-family: 'Montserrat';
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: bold;
}

.card-preco {
  font-family: 'Montserrat';
  font-weight: 500;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.card-loc {
  font-family: 'Montserrat';
  font-weight: 500;
  color: var(--cor-fonte-loc);
  font-size: 1rem;
}

@media (max-width: 576px) {
  .card-titulo,
  .card-preco,
  .card-loc {
    font-size: 0.8rem;
  }

  .card-img > img {
    border-radius: 10px;
  }
}

.link {
  text-decoration: none;
  color: black;
}
</style>
