<script setup></script>

<template>
  <div class="topo">
    <div class="imgTopo">
      <img class="img" src="../assets/logo.png" alt="" />
    </div>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
  </div>
  <div class="nav-container">
    <router-link to="/" class="home-link"
      ><img class="logo-img" src="../assets/home-icon.png" alt=""
    /></router-link>
    <router-link to="/Reservas" id="Reservas-link" class="nav-link"
      ><img src="../assets/minhas-reservas-ison.png" alt=""
    /></router-link>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link"
      ><img src="../assets/anunciar-icon.png" alt=""
    /></router-link>
    <button class="entrar-link" @click="modal"><img src="../assets/usuario.png" alt="" /></button>
  </div>
</template>

<style scoped>
.topo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.imgTopo {
  text-align: center;
}

.img {
  width: 20rem;
  height: 4rem;
}

.search-bar {
  width: 25rem;
  height: 2rem;
  border: 1px solid var(--search-bar-border);
  border-radius: 20px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: var(--search-bar-fill);
  margin-top: 20px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: var(--search-bar-fill);
  margin-left: 0.5rem;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5); /* Sombra */
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
  .nav-container button,
  .nav-container img {
    width: 30px;
    height: 30px;
    background: 0;
    outline: none;
    border: none;
  }
}

@media (max-width: 500px){
  .search-bar,
  .imgTopo{
    scale: 0.8;
  }
}

@media (max-width: 370px){
  .search-bar,
  .imgTopo{
    scale: 0.7;
  }
}
</style>