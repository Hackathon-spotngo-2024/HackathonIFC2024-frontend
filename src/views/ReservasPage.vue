<script setup>
import ReservasComponent from '@/components/ReservasComponent.vue'
</script>

<template>
  <div>
    <div class="reservas-component">
      <div class="titulo">
        <h1>Minhas Reservas</h1>
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
</style>
