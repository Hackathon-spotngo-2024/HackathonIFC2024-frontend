<script setup></script>

<template>
    <div class="ball"></div>
</template>

<style scoped>
.ball {
    width: 10px;
    height: 40px;
    border-radius: 50px;
    background: var(--cor-botao-login);
    animation-name: subir;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}

@keyframes subir {
    0% {
        transform: translateY(0)
    }
    100% {
        transform: translateY(-200px);
    }
}
</style>