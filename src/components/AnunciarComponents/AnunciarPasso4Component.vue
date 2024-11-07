<script setup>
import { useEtapa } from '../../stores/dadosEtapa'
import { useEndereco } from '../../stores/dadosEndereco'
import UploadImagemComponent from '../UploadImagemComponent.vue'
import CampoVazioAlertComponent from '../CampoVazioAlertComponent.vue'
import { onMounted } from 'vue'
const etapaStore = useEtapa()
const enderecoStore = useEndereco()

onMounted(() => {
  window.scrollTo(0, 0)
  enderecoStore.setarDadosLocalStorage()
})
</script>

<template>
  <section class="etapa-4-container">
    <div class="mensagem">
      <h1>Agora, a cara do seu anúncio!</h1>
    </div>

    <div class="conteudo">
      <div class="titulo-e-descricao">
        <div class="titulo">
          <label for="titulo-input">Título</label>
          <input
            type="text"
            id="titulo-input"
            v-model="enderecoStore.dadosEndereco.titulo"
            placeholder="Ex: Salão de casamento"
          />
        </div>

        <div class="descricao">
          <label for="descricao-input">Descrição</label>
          <textarea
            id="descricao-input"
            rows="10"
            v-model="enderecoStore.dadosEndereco.descricao"
            placeholder="Descrição da Locação"
          >
          </textarea>
        </div>
      </div>

      <div class="adicionar-fotos">
        <div class="texto-imagens">
          <h2>Adicionar fotos</h2>
          <p>Adicione 5 fotos ao seu anúncio</p>
        </div>
        <div class="add-foto-container">
          <UploadImagemComponent />
        </div>
        <div class="botoes-wrapper">
          <button class="voltar-btn" @click="etapaStore.etapaAnterior">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
          <button
            class="avancar-btn"
            @click="
              enderecoStore.setarDadosLocalStorage();
              enderecoStore.addAnuncio()
            "
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
    <div class="campo-vazio-container">
      <CampoVazioAlertComponent v-if="enderecoStore.campoVazioAlert" />
    </div>
  </section>
</template>

<style scoped>
.etapa-4-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mensagem {
  margin-top: 100px;
  margin-bottom: 90px;
  text-align: center;
  font-size: 30px;
  font-family: var(--fonte-principal);
}

.conteudo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20rem;
}

.titulo-e-descricao {
  display: flex;
  flex-direction: column;
}

.titulo {
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
  font-weight: bold;
}

#titulo-input {
  font-size: 1rem;
  border-radius: 8px;
  width: 270px;
  height: 45px;
  border: solid 1px rgb(196, 196, 196);
  padding-left: 10px;
  outline: none;
}

#descricao-input::placeholder,
#titulo-input::placeholder {
  font-size: 14px;
}

label {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.descricao {
  display: flex;
  flex-direction: column;
}

#descricao-input {
  font-size: 1rem;
  border-radius: 10px;
  border: solid 1px rgb(196, 196, 196);
  outline: none;
  padding: 10px 0 0 10px;
}

.adicionar-fotos {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 335px;
  justify-content: space-between;
}

.texto-imagens {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-family: var(--fonte-principal);
  font-size: 20px;
}

p {
  font-weight: 400;
  font-size: 1rem;
}

.publicar {
  height: 50px;
  width: 250px;
  border-radius: 25px;
  border: none;
  background-color: var(--cor-principal);
  font-weight: bold;
  color: white;
  font-size: 22px;
  margin-top: 70px;
}

.imagem {
  width: 100px;
  height: 100px;
  align-items: center;
}

.botoes-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  width: 500px;
  gap: 30px; /* Medida exata para o avancar-btn ficar centralizado (500 - 50 - 350 - 30px) */
}

.voltar-btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 0;
  color: var(--preto-alternativo);
  background-color: var(--cor-voltar-btn);
  font-size: 24px;
  transition: 300ms ease;
}

.voltar-btn:hover {
  background-color: var(--cor-voltar-btn-hover);
  transform: scale(1.01);
  color: var(--cor-voltar-btn);
  background-color: var(--preto-alternativo);
}

.fa-solid.fa-arrow-right-from-bracket {
  transform: rotate(180deg);
}

.avancar-btn {
  cursor: pointer;
  width: 350px;
  height: 70px;
  background-color: var(--cor-principal);
  border-radius: 40px;
  border: 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 300ms ease;
}

.avancar-btn:hover {
  background-color: var(--cor-principal-hover);
}

.campo-vazio-container {
  width: 960px;
  height: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
}

@media (max-width: 1160px) {
  h1,
  h2 {
    font-size: 24px;
  }
  .mensagem {
    margin-bottom: 2rem;
  }
  .conteudo {
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  }
  .botoes-wrapper {
    margin-top: 2rem;
  }
  .texto-imagens {
    align-items: center;
  }
}
@media (max-width: 580px) {
  button {
    scale: 0.8;
  }
  .avancar-btn {
    width: 200px;
    font-size: 24px;
  }
  .botoes-wrapper {
    gap: 10px;
    width: fit-content;
  }
}
</style>
