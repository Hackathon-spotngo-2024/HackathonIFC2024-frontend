<script setup>
import { useEndereco } from '../../stores/dadosEndereco';
import { reactive, ref } from 'vue';

const enderecoStore = useEndereco()
const dataVaziaAlert = ref(false)
const datasReserva = reactive({
  dataInicio: '0000-00-00',
  dataTermino: '0000-00-00'
})


function isDataVazia() {
  if (datasReserva.dataInicio == '' || datasReserva.dataTermino == '') {
    return true
  }
  return false
}

function verificarDatas() {
  if (datasReserva.dataInicio < datasReserva.dataTermino && !isDataVazia()) return false
  return true
}

function reservar() {
  if (verificarDatas()) {
    dataVaziaAlert.value = true
    console.log('campo vazio sla oq')
    return
  }
  console.log('sucesso')
}
</script>

<template>
  <section class="reservation-card">
    <div class="card-content">
      <h2 class="price">
        R${{ enderecoStore.dadosAnuncio.preco }} <span class="price-period"> dia</span>
      </h2>
      <div class="date-range">
        <div class="date-input start-date">
          <div class="date-wrapper">
            <label for="start-date" class="date-label">De:</label>
            <input type="date" id="start-date" class="date-value" placeholder="dd/mm/aa"
              v-model="datasReserva.dataInicio" />
          </div>
        </div>
        <div class="date-separator"></div>
        <div class="date-input end-date">
          <div class="date-wrapper">
            <label for="end-date" class="date-label">Até:</label>
            <input type="date" id="end-date" class="date-value" placeholder="dd/mm/aa"
              v-model="datasReserva.dataTermino" />
          </div>
        </div>
      </div>
      <button class="reserve-button" @click="reservar">Reservar</button>
    </div>
  </section>
</template>

<style scoped>
.reservation-card {
  max-width: 315px;
  font-weight: 600;
  margin: 0 auto;
}

.card-content {
  border-radius: 15px;
  background-color: #fff;
  padding: 24px 10px;
  border: 1px solid #000;
}

.price {
  color: #000;
  font-size: 30px;
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
  width: 220px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
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
  background-color: #000;
  margin: 0 5px;
}

.reserve-button {
  border-radius: 40px;
  background-color: #4d735d;
  margin-top: 20px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  padding: 16px 0;
  border: 1px solid #9d9d9d;
  cursor: pointer;
  width: 100%;
}
</style>
