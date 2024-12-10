<script setup></script>

<template>
    <div class="ball-reversed"></div>
</template>

<style scoped>
.ball-reversed {
    width: 10px;
    height: 40px;
    border-radius: 50px;
    background: var(--cor-botao-login);
    animation-name: descer;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}

@keyframes descer {
    0% {
        transform: translateY(-200px)
    }
    100% {
        transform: translateY(0);
    }
}
</style>