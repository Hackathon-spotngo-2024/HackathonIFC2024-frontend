<script setup>
</script>

<template>
  <div class="nav-container">
    <router-link to="/" class="home-link"><img class="logo-img" src="../assets/logo.png" alt="" /></router-link>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
    <router-link to="/alugar" id="alugar-link" class="nav-link">Alugar</router-link>
    <a href="MinhasReservasComponent.vue" id="minhas-reservas-link" class="nav-link">Minhas reservas</a>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link">Anunciar</router-link>
    <button class="entrar-link" @click="openModal">Entrar</button>
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
  cursor: pointer;
  border-radius: 35px;
  font-size: 1rem;
  cursor: pointer;
}

button {
  font-family: 'Montserrat';
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  font-size: 1rem;
  cursor: pointer;
  border: 0;
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
  background-color: var(--cor-linha-divisoria);
}

@media (max-width: 992px) {
  .nav-container {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .logo-img {
    width: 150px;
  }

  .search-bar {
    width: 100%;
    margin-top: 1rem;
  }

  .nav-links {
    width: 100%;
    margin-top: 1rem;
    align-items: center;
  }

  a {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  a {
    margin: 0.5rem 0;
  }

  .search-bar {
    width: 100%;
    align-items: center;  
  }

  .logo-img {
    width: 120px;
  }
}

@media (max-width: 576px) {
  .nav-container {
    padding: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-img {
    width: 100px;
  }

  .search-bar {
    width: 100%;
    margin-top: 1rem;
  }

  .nav-links {
    width: 100%;
    flex-direction: column;
  }

  a {
    font-size: 0.8rem;
  }
}
</style>