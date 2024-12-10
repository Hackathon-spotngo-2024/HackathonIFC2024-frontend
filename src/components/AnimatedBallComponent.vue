<script setup></script>

<template>
    <div class="ball"></div>
</template>

<style scoped>
.ball {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: black;
    animation-name: subir;
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

@keyframes subir {
    0% {
        transform: scale(0);  /* Começa do tamanho 0 */
    }
    8% {
        transform: scale(1);  /* Rapidamente atinge o tamanho normal */
    }
    50% {
        transform: translateY(-200px);  /* Movimenta para cima */
    }
    100% {
        transform: translateY(-200px) translateX(90px);  /* Alvo final deslocado para a direita */
    }
}
</style>