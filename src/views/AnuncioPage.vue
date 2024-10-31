<script setup>
import DescricaoComponent from '@/components/DescricaoComponent.vue'
import ImagensComponent from '@/components/ImagensComponent.vue'
import LocalizaçãoComponent from '@/components/LocalizaçãoComponent.vue'
import ReservaComponent from '@/components/ReservaComponent.vue'
import { useEndereco } from '../../stores/dadosEndereco'

const enderecoStore = useEndereco()
</script>

<template>
  <div class="pagina">
    <section class="container-geral">
      <h1 class="titulo">{{ enderecoStore.dadosEndereco.titulo }}</h1>
      <div class="container-reserva">
        <div class="imagens-component">
          <ImagensComponent />
        </div>

        <div class="reserva-e-descricao">
          <div class="titulo-e-descricao">
            <h1 class="titulo-lugar">
              {{ enderecoStore.dadosEndereco.cidade }}, {{ enderecoStore.dadosEndereco.estado }}
            </h1>
            <p class="titulo-visitantes">
              Até {{ enderecoStore.dadosEndereco.limiteVisitantes }} visitantes
            </p>
            <section class="descricao">
              <div>
                <DescricaoComponent />
              </div>
            </section>
          </div>
          <div class="reserva-component">
            <ReservaComponent />
          </div>
        </div>


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
}

.imagens-component {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.reserva-e-descricao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.titulo-e-descricao {
  display: flex;
  flex-direction: column;
}

.reserva-component {
  margin-left: 25px;
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
</style>
