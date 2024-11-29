<script setup>
import { useRoute } from 'vue-router';
import { useAnuncioFicticio } from '../stores/anuncoFicticio'

const anuncioFicticioStore = useAnuncioFicticio()
const route = useRoute()

const anuncioSelecionado = anuncioFicticioStore.anuncios.find(
  (anuncio) => anuncio.id === Number(route.params.id)
)
</script>

<template>
  <div class="pagina">
    <section class="container-geral">
      <h1 class="titulo">{{ anuncioSelecionado?.titulo }}</h1>
      <div class="container-reserva">

        <div class="imagens-component">
          <div class="imagens-container">
            <div class="imagem-grande" id="left-radius">
              <img :src="anuncioSelecionado.imgs[0]" alt="" />
            </div>
            <div class="imagem-pequena"><img :src="anuncioSelecionado.imgs[1]" alt="" /></div>
            <div class="imagem-pequena" id="top-right-radius">
              <img id="top-right-radius" :src="anuncioSelecionado.imgs[2]" alt="" />
            </div>
            <div class="imagem-pequena"><img :src="anuncioSelecionado.imgs[3]" alt="" /></div>
            <div class="imagem-pequena" id="bottom-right-radius">
              <img id="bottom-right-radius" :src="anuncioSelecionado.imgs[4]" alt="" />
            </div>
          </div>
        </div>
        <section class="reserva-component-e-descricao">
          <section class="descricao-container">
            <div class="titulos">
              <h1 class="titulo-lugar">{{ anuncioSelecionado.cidade }}, {{ anuncioSelecionado.estado }}</h1>
              <p class="titulo-visitantes">Até {{ anuncioSelecionado.limiteVisitantes }} visitantes</p>
            </div>
            <div class="descricao-wrapper">
              <h2 class="titulo-descricao">Descrição</h2>
              <div class="linha-container">
                <div class="linha-divisoria"></div>
              </div>
              <div class="descricao">
                <p>{{ anuncioSelecionado.descricao }}</p>
              </div>
              <div class="linha-container">
                <div class="linha-divisoria"></div>
              </div>
            </div>
          </section>

          <div class="reserva-component">
            <section class="reservation-card">
              <div class="card-content">
                <div class="price">
                  <p class="valor-preco">R${{ anuncioSelecionado.preco }},00</p>
                  <p class="price-period">dia</p>
                </div>
                <div class="date-range">
                  <div class="date-input start-date">
                    <div class="date-wrapper">
                      <label for="start-date" class="date-label">De:</label>
                      <input
                        type="text"
                        id="start-date"
                        class="date-value"
                        placeholder="dd/mm/aa"
                      />
                    </div>
                  </div>
                  <div class="date-separator"></div>
                  <div class="date-input end-date">
                    <div class="date-wrapper">
                      <label for="end-date" class="date-label">Até:</label>
                      <input type="text" id="end-date" class="date-value" placeholder="dd/mm/aa" />
                    </div>
                  </div>
                </div>
                <button class="reserve-button" @click="reservaStore.adicionarReserva">
                  Reservar
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
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
  width: 1000px;
}

.titulo {
  font-size: 32px;
  margin: 1rem 0 1rem 0;
  font-weight: 600;
  color: var(--preto-alternativo);
}

.container-reserva {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imagens-component {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.reserva-component-e-descricao {
  display: flex;
  justify-content: space-between;
}

.reserva-component {
  display: flex;
  width: fit-content;
  justify-content: end;
}

.valor-preco {
  font-weight: 600;
}

.titulos {
  width: fit-content;
}

.titulo-lugar {
  font-size: 24px;
  font-weight: 600;
}

.titulo-visitantes {
  font-size: 16px;
}

.descricao-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 700px;
}

.descricao-wrapper {
  margin-top: 4rem;
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

.card-content {
  border-radius: 15px;
  background-color: #fff;
  padding: 24px 29px;
  border: 1px solid var(--preto-alternativo);
}

.price {
  display: flex;
  gap: 8px;
  color: var(--preto-alternativo);
  font-size: 30px;
  text-align: center;
  margin-bottom: 8px;
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
  white-space: nowrap;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  /* Margem inferior maior para o botão */
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
  text-align: left;
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
  background-color: var(--cor-principal);
  border: none;
  margin-top: 20px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  width: 100%;
  transition: 200ms ease;
}

.reserve-button:hover {
  background-color: var(--cor-principal-hover);
}

.descricao {
  border-radius: 10px;
  width: 550px;
  height: fit-content;
}

.titulo-descricao {
  font-size: 24px;
  font-weight: 600;
}

.descricao p {
  line-height: 1.6;
  font-size: 18px;
}

.linha-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.linha-divisoria {
  margin-top: 1rem;
  width: 100%;
  height: 1px;
  margin: 1.5rem 0rem 1.5rem 0;
  background-color: var(--cor-linha-divisoria);
}
</style>
