<script setup>
import { useReserva } from '../stores/dadosReserva'

const reservaStore = useReserva()

const props = defineProps({
  anuncio: {
    type: Object,
    Required: true
  }
})
</script>

<template>
  <section class="reservation-card">
    <div class="card-content">
      <h2 class="price">
        R${{ props.anuncio.preco }} <span class="price-period"> /dia</span>
      </h2>
      <div class="date-range">
        <div class="date-input start-date">
          <div class="date-wrapper">
            <label for="start-date" class="date-label">De:</label>
            <input type="date" id="start-date" class="date-value" placeholder="dd/mm/aa"
              v-model="reservaStore.datasReserva.dataInicio" />
          </div>
        </div>
        <div class="date-separator"></div>
        <div class="date-input end-date">
          <div class="date-wrapper">
            <label for="end-date" class="date-label">Até:</label>
            <input type="date" id="end-date" class="date-value" placeholder="dd/mm/aa"
              v-model="reservaStore.datasReserva.dataTermino" />
          </div>
        </div>
      </div>
      <button class="reserve-button" @click="reservaStore.adicionarReserva">Reservar</button>
      <div v-if="reservaStore.dataVaziaAlert" class="data-vazia-alert">
        <p>Informe a data da visita.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reservation-card {
  width: fit-content;
  font-weight: 600;
  margin: 0 auto;
}

.card-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  border-radius: 15px;
  background-color: #fff;
  padding: 24px 10px;
  border: 1px solid #bbbbbb;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
}

.price {
  color: #000;
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 600;
}

.price-period {
  font-weight: 400;
}

.frequency {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-top: -5px;
  margin-bottom: 15px;
  text-align: center;
}

.date-range {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  width: 280px;
  height: 50px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
}

.date-input {
  width: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
  flex: 0.5;
  justify-content: center;
}

.date-wrapper {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.date-label {
  color: #000;
  font-size: 14px;
  font-weight: 500;
}

.date-value {
  color: #616161;
  font-size: 12px;
  border: none;
  background: transparent;
  padding: 0;
  width: 100px;
  outline: 0;
  text-align: center;
}

.calendar-icon {
  width: 12px;
  position: absolute;
  right: 10px;
}

.date-separator {
  width: 1px;
  background-color: #bbbbbb;
  ;
  margin: 0 5px;
}

.reserve-button {
  border-radius: 30px;
  background: var(--cor-botao-login);
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  border: 0;
  width: 100%;
  transition: 300ms ease-in-out;
}

.reserve-button:hover {
  filter: brightness(0.85);
}

.data-vazia-alert p {
  color: var(--cor-texto-erro);
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
}

.data-vazia-alert {
  display: flex;
  justify-content: center;
}

@media (max-width: 1100px) {

  .reservation-card,
  .card-content {
    width: 260px;
  }

  .date-range {
    width: 220px;
  }

  .date-wrapper {
    width: 100px;
  }
}

@media (max-width: 760px) {
  .linha-container {
    width: 250px;
  }
  .card-content {
    width: 220px;
  }
  .date-range {
    width: 210px
  }
  .reservation-card {
    width: 260px;
    width: fit-content;
    margin-right: 0;
  }
  .date-input.start-date, .date-wrapper {
    width: 40px;
  }
  .date-input {
    display: flex;
    justify-content: start;
  }
}

@media (max-width: 600px) {
  .reservation-card {
    margin: .5rem 0 0 0;
  }
}
</style>
