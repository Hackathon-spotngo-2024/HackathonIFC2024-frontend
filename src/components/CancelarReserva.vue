<script setup>
import { useReserva } from '@/stores/dadosReserva'

const reservaStore = useReserva()

const confirmarExclusao = () => {
  if (reservaStore.cancelarReservaId !== null) {
    reservaStore.deletarReserva(reservaStore.cancelarReservaId)
    reservaStore.toggleCancelarModal
    console.log(reservaStore.cancelarReservaModal)
  }
}
</script>

<template>
  <div class="modal">
    <div class="cancelar-reserva-container">
      <h1>Tem certeza que deseja <strong>cancelar</strong> sua reserva?</h1>
      <div class="botoes-e-aviso">
        <div class="botoes-container">
          <button class="voltar" @click="reservaStore.toggleCancelarModal">Voltar</button>
          <button @click="confirmarExclusao" class="cancelar">
            Cancelar reserva
          </button>
        </div>
        <p><strong>Atenção:</strong> Esta ação causará perda de momentos especiais!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cancelar-reserva-container {
  display: flex;
  padding: 2.5rem 1rem;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: white;
  text-align: center;
  width: 450px;
  height: 200px;
  border-radius: 35px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 24px;
  font-weight: 500;
}

.botoes-e-aviso {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

p {
  font-size: 14px;
}

.botoes-container {
  display: flex;
  gap: 3rem;
}

.cancelar {
  width: 150px;
  height: 50px;
  background-color: var(--cor-botao-cancelar);
  color: white;
  border-radius: 15px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  transition: 200ms ease-in-out;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.cancelar:hover {
  background-color: var(--cor-botao-cancelar-hover);
  cursor: pointer;
}

.voltar {
  width: 150px;
  height: 50px;
  background-color: white;
  color: var(--cor-botao-cancelar);
  border-radius: 15px;
  border: 1px solid var(--cor-linha-divisoria);
  font-weight: 500;
  font-size: 16px;
  transition: 200ms ease-in-out;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

.voltar:hover {
  background-color: var(--cor-linha-divisoria);
  cursor: pointer;
}
</style>
