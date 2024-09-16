<script setup>

</script>

<template>
  <div class="nav-container">
    <router-link to="/" class="home-link"><img class="logo-img" src="../assets/logo.png" alt="" /></router-link>
    <router-link to="/alugar" id="alugar-link" class="nav-link">Alugar</router-link>
    <a href="MinhasReservasComponent.vue" id="minhas-reservas-link" class="nav-link">Minhas reservas</a>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link">Anunciar</router-link>
    <a href="LoginComponent.vue" class="entrar-link">Entrar</a>
  </div>
  <div class="linha-container">
    <div class="linha-divisoria"></div>
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 10rem 0 10rem;
  border-radius: 40px;
  padding: .5rem;
  box-shadow: 1px 3px 8px 3px rgba(0, 0, 0, 0.08);
}

a {
  font-family: 'Montserrat';
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  font-size: 1rem;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  height: 2px;
  width: 100%;
  left: 0;
  background-color: black;
  transition: 200ms ease-in-out;
  transform: scaleX(0);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.entrar-link {
  color: white;
  background-color: var(--cor-principal);
  width: 6.25rem;
  height: 3.125rem;
  transition: 100ms ease;
}

.entrar-link:hover {
  background-color: var(--cor-principal-hover);
}

.logo-img {
  width: 200px;
  height: 40px;
}

.search-bar {
  width: 25rem;
  height: 2.5rem;
  border: 1px solid var(--search-bar-border);
  border-radius: 20px;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: var(--search-bar-fill);
}

.search-input {
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: var(--search-bar-fill);
  margin: 0 0 0 1rem;
}

.fa.fa-search {
  color: gray;
}

.linha-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.linha-divisoria {
  margin-top: 1rem;
  width: 100%;
  height: 1px;
  margin: 1.5rem 10rem 0 10rem;
  background-color: var(--cor-linha-divisoria)
}
</style>
