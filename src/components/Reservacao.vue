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
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5" alt="" class="calendar-icon" />
          </div>
          <div class="date-input end-date">
            <div class="date-wrapper">
              <label for="end-date" class="date-label">Até:</label>
              <input type="text" id="end-date" class="date-value" placeholder="dd/mm/aa" />
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5" alt="" class="calendar-icon" />
          </div>
        </div>
        <button class="reserve-button">Reservar</button>
      </div>
    </section>
  </template>
  
  <style scoped>
  .reservation-card {
    max-width: 315px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
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
  }
  
  .price-period {
    font-weight: 400;
  }
  
  .frequency {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    margin-left: 12px;
  }
  
  .date-range {
    display: flex;
    margin-top: 18px;
    width: 100%;
    max-width: 233px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    white-space: nowrap;
  }
  
  .date-input {
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 4px 21px 13px 6px;
    background-color: #fff;
    border: 1px solid #000;
  }
  
  .start-date {
    border-radius: 5px 0 0 5px;
    border-right: none;
  }
  
  .end-date {
    border-radius: 0 5px 6px 0;
    border-left: none;
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
  }
  
  .calendar-icon {
    width: 12px;
    margin-top: 17px;
  }
  
  .reserve-button {
    border-radius: 40px;
    background-color: #4d735d;
    margin-top: 46px;
    font-size: 20px;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    padding: 16px 70px;
    border: 1px solid #9d9d9d;
    cursor: pointer;
    width: 100%;
  }
  </style>