<script setup>
const props = defineProps({
  anuncio: {
    type: Object,
    Required: true
  }
})
</script>

<template>
  <h2 class="titulo-descricao">Descrição</h2>
  <div class="linha-container">
    <div class="linha-divisoria"></div>
  </div>
  <div class="descricao">
    <p>{{ props.anuncio.descricao }}</p>
  </div>
  <div class="linha-container">
    <div class="linha-divisoria"></div>
  </div>
</template>

<style scoped>
.descricao {
  width: 550px;
  height: fit-content;
}

.titulo-descricao {
  text-align: start;
  font-weight: 600;
  font-size: 24px;
}

.descricao p {
  width: 550px;
  font-size: 18px;
  word-break: break-word;
}

.linha-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.linha-divisoria {
  margin-top: 1rem;
  width: 100%;
  height: 1px;
  margin: 1.5rem 0rem 1.5rem 0;
  background-color: var(--cor-linha-divisoria);
}

@media (max-width: 1100px) {
  .reserva-e-descricao {
    width: 800px;
  }
  .linha-container {
    width: 350px;
  }
}
@media (max-width: 760px) {
  .linha-container {
    width: 250px;
  }
  .descricao {
    width: fit-content;
  }
}
@media (max-width: 600px) {
  .linha-container {
    width: 80dvw;
  }
}
</style>
