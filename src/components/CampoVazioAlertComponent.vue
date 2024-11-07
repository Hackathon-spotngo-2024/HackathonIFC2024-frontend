<script setup></script>

<template>
  <div class="campo-vazio-alert">
    <p class="campo-vazio-text">Preencha todos os campos para prosseguir.</p>
  </div>
</template>

<style scoped>
.campo-vazio-alert {
    width: 350px;
    display: flex;
    justify-content: start;
    color: var(--cor-texto-erro);
  }
</style>