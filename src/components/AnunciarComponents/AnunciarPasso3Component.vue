<script setup>
import BotaoAvancarEVoltarComponent from '../BotaoAvancarEVoltarComponent.vue'
import { watch, onMounted, ref } from 'vue'
import { useEndereco } from '../../../stores/dadosEndereco'
import { useEtapa } from '../../../stores/dadosEtapa'
import CampoVazioAlertComponent from '../CampoVazioAlertComponent.vue'

const isBotaoPequeno = ref(true)
const enderecoStore = useEndereco()
const etapaStore = useEtapa()
const tituloEtapa3 = ref('Mais algumas informações<br>sobre sua acomodação')
const precoInput = ref(null) //Referencia o input do preço

function adicionarVisitante() {
  enderecoStore.dadosEndereco.limiteVisitantes++
}

function reduzirVisitante() {
  enderecoStore.dadosEndereco.limiteVisitantes--
  if (enderecoStore.dadosEndereco.limiteVisitantes < 0)
    enderecoStore.dadosEndereco.limiteVisitantes = 0
}

function ajustarTamanhoInput() {
  const inputElement = precoInput.value //InputElement vai ser o valor que o usuario inserir no input
  const placeholderText = inputElement.placeholder //Referencia o placeholder do input

  const textLength = inputElement.value.length || placeholderText.length //textLength será o tamanho do número que o usuário inseriu, ou do placeholder (5 por padrao (00,00))

  inputElement.style.width = `${textLength}ch` //Aqui ele finaliza ajustando o css do input, colocando o tamanho do texto como a quantidade de caracteres (ch)
}

const verificarEtapa3 = () => {
  if (
    enderecoStore.dadosEndereco.limiteVisitantes == 0 ||
    enderecoStore.dadosEndereco.preco == ''
  ) {
    enderecoStore.campoVazioAlert = true
    return
  } else {
    enderecoStore.campoVazioAlert = false
    etapaStore.proximaEtapa()
  }
}

watch(() => enderecoStore.dadosEndereco.preco, ajustarTamanhoInput)
onMounted(() => {
  window.scrollTo(0, 0)
  enderecoStore.setarDadosLocalStorage()
  ajustarTamanhoInput
})
</script>

<template>
  <section class="etapa-3-container">
    <div class="titulo-principal-container">
      <h1 v-html="tituloEtapa3" class="titulo-principal"></h1>
    </div>

    <section class="infos-e-imagem">
      <div class="etapa-3-infos">
        <div class="limite-visitantes-wrapper">
          <label for="botao-visitantes" class="limite-visitantes-titulo"
            >Limite de visitantes</label
          >
          <div class="botoes-visitantes">
            <input type="button" class="botao-visitantes" value="-" @click="reduzirVisitante" />
            <p class="numero-visitantes">{{ enderecoStore.dadosEndereco.limiteVisitantes }}</p>
            <input type="button" class="botao-visitantes" value="+" @click="adicionarVisitante" />
          </div>
        </div>
        <div class="preco-wrapper">
          <label for="preco-input" class="preco-titulo">Preço p/ dia</label>
          <div class="preco-input-wrapper">
            <span class="cifrao">R$</span>
            <input
              ref="precoInput"
              type="number"
              id="preco-input"
              placeholder="00,00"
              v-model="enderecoStore.dadosEndereco.preco"
            />
            <span v-if="enderecoStore.dadosEndereco.preco != 0" class="centavos">,00</span>
          </div>
        </div>
        <BotaoAvancarEVoltarComponent
          :is-botao-pequeno="isBotaoPequeno"
          class="avancar-e-voltar-botoes"
          @avancar="verificarEtapa3"
        />
        <CampoVazioAlertComponent v-if="enderecoStore.campoVazioAlert"/>
      </div>

      <div class="imagem-casa">
        <img src="/src/assets/imagem-etapa-3.png" />
      </div>
    </section>
  </section>
</template>

<style scoped>
.etapa-3-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.titulo-principal-container {
  text-align: center;
  font-size: 2rem;
  margin-top: 100px;
}

.infos-e-imagem {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}

.etapa-3-infos {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.limite-visitantes-wrapper > label,
.preco-wrapper > label {
  font-size: 2rem;
  font-weight: 600;
  cursor: text;
}

.limite-visitantes-wrapper {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.botoes-visitantes {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.numero-visitantes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
}

.botao-visitantes {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 1px solid var(--cor-bordas-input);
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  color: var(--cor-bordas-input);
  background-color: rgba(0, 0, 0, 0);
}

.botao-visitantes:hover {
  border: 1px solid var(--cor-bordas-hover);
}

.botao-visitantes:active {
  transform: scale(1.03);
}

.preco-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
}

.preco-input-wrapper {
  display: flex;
  align-items: center;
}

.preco-input-wrapper > span {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cor-principal);
}

.preco-input-wrapper > input {
  font-size: 1.5rem;
  height: 35px;
  border: 0;
  outline: none;
  font-weight: 600;
  color: var(--cor-principal);
}

input[type='number']::-webkit-inner-spin-button {
  appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

::-webkit-input-placeholder {
  color: var(--cor-placeholder);
}

.avancar-e-voltar-botoes {
  margin-top: 20%;
}

@media (max-width: 1360px) {
  .imagem-casa img  {
    width: 600px;
  }
  .etapa-3-infos {
    width: 400px;
  }
  h1, .limite-visitantes-wrapper > label, .preco-wrapper > label {
    font-size: 24px;
  }
}

@media (max-width: 1100px) {
  .imagem-casa {
    display: none;
  }
  .limite-visitantes-wrapper, .preco-wrapper, .preco-input-wrapper {
    align-items: center;
  }
  #preco-input {
    width: 100px;
  }
}
</style>
