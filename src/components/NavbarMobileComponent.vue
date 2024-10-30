<script setup></script>

<template>
    <div class="nav-container">
        <router-link to="/" class="home-link"><img class="logo-img" src="../assets/home-icon.png" alt="" /></router-link>
        <router-link to="/Reservas" id="Reservas-link" class="nav-link"><img src="../assets/minhas-reservas-ison.png" alt=""></router-link>
        <router-link to="/anunciar" id="anunciar-link" class="nav-link"><img src="../assets/anunciar-icon.png" alt=""></router-link>
        <button class="entrar-link" @click="modal"><img src="../assets/usuario.png" alt=""></button>
    </div>
</template>

<style scoped>
    .nav-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: rgba(0, 0, 0, 0);
    }
    .nav-container img {
        width: 40px;
        height: 40px;
    }
    .nav-container button {
        background: 0;
        outline: none;
        border: none;
    }

    @media (max-width: 380px) {
        .nav-container button, .nav-container img {
            width: 30px;
            height: 30px;
        background: 0;
        outline: none;
        border: none;
    }
    }
</style>