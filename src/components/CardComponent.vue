<script setup>
const props = defineProps({
  anuncio: {
    type: Object,
    Required: true
  }
})
</script>

<template>
  <div class="card">
    <router-link :to="`/anuncio/${anuncio.id}`" class="link">
      <div class="card-img">
        <img :src="anuncio.imgs[0]" alt="" />
      </div>
      <div class="card-infos">
        <div class="card-titulo">{{ props.anuncio.titulo }}</div>
        <div class="card-preco">{{ 'R$' + props.anuncio.preco + ',00' }}</div>
        <div class="card-loc">
          {{ props.anuncio.cidade + ', ' + props.anuncio.estado }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;
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
  width: 310px;
  height: 280px;
  border-radius: 15px;
  transition: 300ms ease-in-out;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.479);
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
