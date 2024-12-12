<script setup>
import CancelarReserva from '@/components/CancelarReserva.vue'
import ReservasComponent from '@/components/ReservasComponent.vue'
import { useReserva } from '@/stores/dadosReserva'
import { onMounted } from 'vue'

const reservaStore = useReserva()

onMounted(() => {
  reservaStore.reservasEmptyVerifier()
})
</script>

<template>
  <transition name="fade" mode="out-in">
    <CancelarReserva v-if="reservaStore.cancelarReservaModal" />
  </transition>
  <div>
    <div class="reservas-component">
      <div v-if="reservaStore.isReservasEmpty == false" class="titulo">
        <h1>Minhas Reservas</h1>
      </div>
      <div class="sem-reservas-container" v-if="reservaStore.isReservasEmpty">
        <h1 class="mensagem-sem-reservas">Você ainda não possui reservas.</h1>
        <p>Encontre seu próximo <em>spot</em> na <router-link class="home-link" to="/">página principal</router-link>!</p>
        <img class="illustration" src="../../public/undraw_snow_games_tq9r.svg" alt="">
      </div>
      <ReservasComponent />
    </div>
  </div>
</template>

<style scoped>
.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 200ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.05;
}

.sem-reservas-container {
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
}

.home-link {
  color: black;
  font-weight: 500;
}

.illustration {
  margin-top: 7rem;
  width: 400px;
}

@media (max-width: 670px) {
  .sem-reservas-container {
    height: 60dvh;
  }
  .mensagem-sem-reservas {
    font-size: 24px;
  }
  .illustration {
    width: 250px;
  }
}

@media (max-width: 480px) {
  .reservas-component {
    height: fit-content;
  }
  .sem-reservas-container {
    height: 70dvh;
  }
  .container-reservas {
    height: fit-content;
  }
  .mensagem-sem-reservas, p {
    margin-top: 3rem;
    width: 300px;
    text-align: center;
  }
  p {
    margin-top: 1rem;
  }
  .illustration {
    width: 220px;
  }
}
</style>
