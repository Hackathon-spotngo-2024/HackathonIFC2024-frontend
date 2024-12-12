<script setup>
import { ref } from 'vue'

const mensagemReservado = ref('Anúncio reservado com sucesso!')
const linkToHome = ref('Voltar à página inicial')
</script>

<template>
  <div class="container">
    <section class="titulo-e-subtitulo">
      <h1>{{ mensagemReservado }}</h1>
      <div class="mensagem-spotngo">
        <p>Vá até Minhas Reservas para verificar sua reserva!</p>
      </div>
    </section>
    <section class="imagem-publicado">
      <img src="../assets/casa-anuncio-publicado.png" alt="" />
    </section>
    <router-link to="/" class="link-home">{{ linkToHome }}</router-link>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.titulo-e-subtitulo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: .5rem;
}

.link-home {
  color: black;
  font-size: 24px;
}

.mensagem-spotngo {
  font-size: 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.spot-n-go {
  color: var(--cor-principal);
}

.imagem-publicado {
  display: flex;
  justify-content: start;
  align-items: center;
  width: fit-content;
  height: 600px;
}

.imagem-publicado img {
  width: 700px;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 24px;
  }
  .mensagem-spotngo, .link-home {
    font-size: 20px;
  }
  .imagem-publicado {
    width: 760px;
    display: flex;
    justify-content: center;
  }
  .imagem-publicado img {
    width: 650px;
  }
}

@media (max-width: 760px) {
  .imagem-publicado {
    width: 500px;
    height: 450px;
  }
  .imagem-publicado img {
    width: 500px;
  }
}
@media (max-width: 600px) {
  .titulo-e-subtitulo {
    width: 300px;
    text-align: center;
  }
  .mensagem-spotngo {
    display: none;
  }
  .imagem-publicado {
    width: 330px;
    height: 350px;
  }
  .imagem-publicado img {
    width: 330px;
  }
}
</style>
