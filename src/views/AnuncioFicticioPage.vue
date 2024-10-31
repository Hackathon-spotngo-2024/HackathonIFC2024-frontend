<script setup>
import LocalizaçãoComponent from '@/components/LocalizaçãoComponent.vue'
</script>

<template>
  <div class="pagina">
    <section class="container-geral">
      <h1 class="titulo">Salão de festas</h1>
      <div class="container-reserva">
        <div class="imagens-component">
          <div class="imagens-container">
            <div class="imagem-grande" id="left-radius">
              <img src="../../public/salaocasamento1.jpeg" alt="" />
            </div>
            <div class="imagem-pequena"><img src="../../public/salaocasamento3.jpg" alt="" /></div>
            <div class="imagem-pequena" id="top-right-radius">
              <img id="top-right-radius" src="../../public/salaocasamento.jpg" alt="" />
            </div>
            <div class="imagem-pequena"><img src="../../public/salaocasamento3.jpg" alt="" /></div>
            <div class="imagem-pequena" id="bottom-right-radius">
              <img id="bottom-right-radius" src="../../public/salaocasamento.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="reserva-component">
          <section class="reservation-card">
            <div class="card-content">
              <h2 class="price">R$129,00 <span class="price-period">por dia</span></h2>
              <div class="date-range">
                <div class="date-input start-date">
                  <div class="date-wrapper">
                    <label for="start-date" class="date-label">De:</label>
                    <input type="text" id="start-date" class="date-value" placeholder="dd/mm/aa" />
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5"
                    alt="ícone de calendário"
                    class="calendar-icon"
                  />
                </div>
                <!-- Separador -->
                <div class="date-separator"></div>
                <div class="date-input end-date">
                  <div class="date-wrapper">
                    <label for="end-date" class="date-label">Até:</label>
                    <input type="text" id="end-date" class="date-value" placeholder="dd/mm/aa" />
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cedd3ab815fcc7a4589c069de63d76c3a95e07a1c4f57c335d65a9c062d947?placeholderIfAbsent=true&apiKey=229514d5330a4793a24a9af5d8cdc0f5"
                    alt="ícone de calendário"
                    class="calendar-icon"
                  />
                </div>
              </div>
              <button class="reserve-button">Reservar</button>
            </div>
          </section>
        </div>
      </div>

      <h1 class="titulo-lugar">Salão de festas</h1>
      <p class="titulo-visitantes">Até 350 visitantes</p>
      <section class="descricao-e-loc">
        <div>
          <h2 class="titulo-descricao">Descrição</h2>
          <div class="descricao">
            <p>
              Este salão de festas é um espaço versátil e acolhedor, ideal para eventos sociais e
              comemorações. Ele possui uma área ampla, bem iluminada, com capacidade para acomodar
              confortavelmente um grande número de convidados. O ambiente conta com janelas grandes
              que permitem a entrada de luz natural durante o dia e uma iluminação agradável e
              ajustável para a noite, criando uma atmosfera perfeita para qualquer tipo de evento. O
              salão é equipado com mesas e cadeiras que podem ser dispostas conforme a necessidade
              do evento, seja uma festa de aniversário, reunião familiar, ou um evento corporativo.
              Há um balcão de apoio para organização de alimentos e bebidas, além de um espaço
              reservado para uma pequena pista de dança ou área de apresentações, se desejado. Para
              o conforto dos convidados, o salão possui sistema de ventilação, climatização,
              banheiros próximos e acesso fácil para pessoas com mobilidade reduzida.
            </p>
          </div>
        </div>
        <div>
          <LocalizaçãoComponent />
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.pagina {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-geral {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
}

.titulo {
  font-size: 32px;
  margin-bottom: 35px;
  margin-top: 35px;
}

.container-reserva {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.imagens-component {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.reserva-component {
  margin-left: 25px;
}

.titulo-lugar {
  font-size: 24px;
}

.titulo-visitantes {
  font-size: 16px;
}

.descricao-e-loc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.imagens-container {
  display: grid;
  grid-template-areas:
    'imagem-grande imagem-pequena imagem-pequena'
    'imagem-grande imagem-pequena imagem-pequena';
  gap: 10px;
  width: 1000px;
}

.imagem-grande {
  grid-area: imagem-grande;
  background-color: lightgray;
  height: 490px;
  width: 500px;
  border-radius: 20px 0 0 20px;
}

.imagem-grande img {
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
}

.imagem-pequena {
  background-color: lightgray;
  height: 240px;
  width: 240px;
}

.imagem-pequena img {
  width: 100%;
  height: 100%;
}

#top-right-radius {
  border-radius: 0 20px 0 0;
}

#top-right-radius {
  width: 100%;
  height: 100%;
}

#bottom-right-radius {
  border-radius: 0 0 20px 0;
}

.reservation-card {
  max-width: 315px; /* Ajuste de largura para ficar próximo ao da imagem */
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

.descricao {
  padding: 15px;
  border: 1px solid var(--cor-bordas-input);
  border-radius: 10px;
  width: 550px;
  height: fit-content;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.titulo-descricao {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.descricao p {
  line-height: 1.6;
  font-size: 18px;
  margin: 10px 0;
}
</style>
