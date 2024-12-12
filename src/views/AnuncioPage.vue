<script setup>
import DescricaoComponent from '@/components/DescricaoComponent.vue'
import ImagensComponent from '@/components/ImagensComponent.vue'
import ReservaComponent from '@/components/ReservaComponent.vue'
import { useEndereco } from '../stores/dadosEndereco'
import { useRoute } from 'vue-router'
import 'flowbite'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})

const route = useRoute()
const enderecoStore = useEndereco()

const anuncioSelecionado = enderecoStore.anunciosCriados.find(
  (anuncio) => anuncio.id === Number(route.params.id)
)
</script>

<template>
  <div class="pagina">
    <section class="container-geral">
      <div class="titulo">
        <h1>{{ anuncioSelecionado?.titulo }}</h1>
      </div>
      <div class="container-reserva">
        <div class="imagens-component">
          <ImagensComponent :anuncio="anuncioSelecionado" />
        </div>

        <div class="reserva-e-descricao">
          <div class="titulo-e-descricao">
            <h1 class="titulo-lugar">
              {{ anuncioSelecionado?.cidade }}, {{ anuncioSelecionado?.estado }}
            </h1>
            <p class="titulo-visitantes">
              Até {{ anuncioSelecionado?.limiteVisitantes }} visitantes
            </p>
            <section class="descricao">
              <div>
                <DescricaoComponent :anuncio="anuncioSelecionado" />
              </div>
            </section>
          </div>
          <div class="reserva-component">
            <ReservaComponent :anuncio="anuncioSelecionado" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import 'flowbite';
@tailwind base;
@tailwind components;
@tailwind utilities;

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
  margin: 1rem 0 1rem 0;
  font-size: 32px;
  font-weight: 600;
}

.container-reserva {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imagens-component {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.reserva-e-descricao {
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: space-between;
}

.titulo-e-descricao {
  display: flex;
  flex-direction: column;
}

.reserva-component {
  margin-left: 25px;
  width: fit-content;
}

.titulo-lugar {
  font-size: 24px;
  font-weight: 600;
}

.titulo-visitantes {
  font-size: 16px;
}

.descricao {
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 1100px) {
  .reserva-e-descricao {
    width: 850px;
    margin-top: 3rem;
  }
  .reserva-component {
    width: 300px;
    margin-left: 0;
    display: flex;
    justify-content: end;
  }
  .imagens-component {
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  .titulo {
    width: 700px;
    margin: 1rem 0 0 80px;
  }
  .reserva-e-descricao {
    margin-top: 1.5rem;
  }
}

@media (max-width: 990px) {
  .titulo {
    width: 600px;
    margin: 1rem 0 .5rem 150px;
  }
  .reserva-e-descricao {
    width: fit-content;
    display: flex;
    margin-top: 1rem;
  }
  .titulo-e-descricao {
    width: 400px;
  }
  .imagens-component {
    height: 350px;
    margin-bottom: 1rem;
  }
}

@media (max-width: 760px) {
  .titulo-e-descricao {
    width: 250px;
  }
  .container-reserva {
    height: 100dvh;
  }
  .titulo {
    margin: 1rem 0 1rem 130px;
  }
  .reserva-e-descricao {
    display: flex;
    margin-top: 2rem;
    width: 500px;
    justify-content: space-between;
  }
  .imagens-component {
    margin-bottom: 1rem;
  }
}
@media (max-width: 600px) {
  .container-geral, .container-reserva {
    width: 100dvw;
  }
  .pagina {
    width: 100dvw;
    height: 970px;
  }
  .reserva-component {
    width: fit-content;
  }
  .reserva-e-descricao {
    display: flex;
    flex-direction: column;
  }
  .titulo-e-descricao {
    width: 80dvw;
  }
  .imagens-component {
    margin-bottom: 0;
  }
}
</style>
