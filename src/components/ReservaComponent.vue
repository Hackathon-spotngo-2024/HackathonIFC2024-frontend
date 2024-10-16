<script setup>
</script>

<template>
  <section class="reservation-card">
    <div class="card-content">
      <h2 class="price">
        R$2000 <span class="price-period">por dia</span>
      </h2>
      <p class="frequency">Semanal</p>
      <div class="date-range">
        <div class="date-input start-date">
          <div class="date-wrapper">
            <label for="start-date" class="date-label">De:</label>
            <input type="text" id="start-date" class="date-value" placeholder="dd/mm/aa" />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5" alt="ícone de calendário" class="calendar-icon" />
        </div>
        <!-- Separador -->
        <div class="date-separator"></div>
        <div class="date-input end-date">
          <div class="date-wrapper">
            <label for="end-date" class="date-label">Até:</label>
            <input type="text" id="end-date" class="date-value" placeholder="dd/mm/aa" />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5" alt="ícone de calendário" class="calendar-icon" />
        </div>
      </div>
      <button class="reserve-button">Reservar</button>
    </div>
  </section>
</template>

<style scoped>
.reservation-card {
  max-width: 315px; /* Ajuste de largura para ficar próximo ao da imagem */
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin: 0 auto;
}

.card-content {
  border-radius: 15px;
  background-color: #fff;
  padding: 24px 29px;
  border: 1px solid #000;
}

.price {
  color: #000;
  font-size: 30px;
  text-align: center;
  margin-bottom: 8px; /* Menor margem inferior para corresponder à imagem */
}

.price-period {
  font-weight: 400;
}

.frequency {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-top: -5px;
  margin-bottom: 15px; /* Ajuste de espaçamento entre "Semanal" e os campos de data */
  text-align: center;
}

.date-range {
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  white-space: nowrap;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px; /* Margem inferior maior para o botão */
}

.date-input {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  background-color: #fff;
  flex: 1;
  justify-content: center;
  position: relative;
}

.date-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.date-label {
  color: #000;
  font-size: 10px;
}

.date-value {
  color: #616161;
  font-size: 12px;
  border: none;
  background: transparent;
  padding: 0;
  width: 60px;
  text-align: left; /* Alinha o texto à esquerda dentro do input */
}

.calendar-icon {
  width: 12px;
  position: absolute;
  right: 10px; /* Posiciona o ícone à direita */
}

/* Estilo para o separador */
.date-separator {
  width: 1px;
  background-color: #000;
  margin: 0 5px; /* Margem menor entre os dois campos */
}

.reserve-button {
  border-radius: 40px;
  background-color: #4d735d;
  margin-top: 20px; /* Margem superior ajustada */
  font-size: 20px;
  color: #fff;
  text-align: center;
  padding: 16px 0;
  border: 1px solid #9d9d9d;
  cursor: pointer;
  width: 100%;
}
</style>
