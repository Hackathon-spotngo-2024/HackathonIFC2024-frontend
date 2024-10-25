<script setup>
import { useEndereco } from '../../stores/dadosEndereco';

const enderecoStore = useEndereco()
</script>

<template>
            <h2>Descrição</h2>
    <div class="descricao">
        <p>{{ enderecoStore.dadosAnuncio.descricao }}</p>
    </div>
</template>

<style scoped>
.descricao {
    padding: 15px;
    border: 1px solid var(--cor-bordas-input);
  border-radius: 10px;
  width: 550px;
  height: fit-content;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  font-size: 18px;
  margin: 10px 0;
}

strong {
  font-size: 20px;
  display: block;
  margin-top: 20px;
}
</style>
