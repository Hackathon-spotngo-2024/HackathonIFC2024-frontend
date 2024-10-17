<script setup>
import DescricaoComponent from '@/components/DescricaoComponent.vue';
import ImagensComponent from '@/components/ImagensComponent.vue';
import LocalizaçãoComponent from '@/components/LocalizaçãoComponent.vue';
import ReservaComponent from '@/components/ReservaComponent.vue';
import 


</script>

<template>
    <div class="pagina">
        <section class="container-geral">
            <h1 class="titulo">Salão de Casamento</h1>
            <div class="container-reserva">
                <div class="imagens-component">
                    <ImagensComponent />
                </div>
                <div class="reserva-component">
                    <ReservaComponent />
                </div>
            </div>
            <h1 class="titulo-lugar">Salão de festa em Joinville, Brasil</h1>
            <p class="titulo-visitantes">Até 400 visitantes </p>
            <section class="descricao-e-loc">
                <div>
                    <DescricaoComponent />
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
</style>