<script setup>
defineProps({
    proximaEtapa: Function,
    etapaAnterior: Function,
    campoVazioAlert: Boolean,
    verificarFormulario: Function,
    isAlgumCampoVazio: Function
})
</script>

<template>
    <div class="botoes-wrapper">
      <button class="voltar-btn" @click="etapaAnterior">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
      <button class="avancar-btn" @click="verificarFormulario()">Avançar</button>
    </div>
</template>

<style scoped>
.botoes-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  width: 500px;
  gap: 30px; /* Medida exata para o avancar-btn ficar centralizado (500 - 50 - 350 - 30px) */
  margin-top: 2rem;
}

.voltar-btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 0;
  color: var(--preto-alternativo);
  background-color: var(--cor-voltar-btn);
  font-size: 24px;
  transition: 300ms ease;
}

.voltar-btn:hover {
  background-color: var(--cor-voltar-btn-hover);
  transform: scale(1.01);
  color: var(--cor-voltar-btn);
  background-color: var(--preto-alternativo);
}

.fa-solid.fa-arrow-right-from-bracket {
  transform: rotate(180deg);
}

.avancar-btn {
  cursor: pointer;
  width: 350px;
  height: 70px;
  background-color: var(--cor-principal);
  border-radius: 40px;
  border: 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.avancar-btn:hover {
  background-color: var(--cor-principal-hover);
}
</style>