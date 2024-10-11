<script setup></script>

<template>
  <div class="nav-container">
    <router-link to="/" class="home-link"
      ><img class="logo-img" src="../assets/logo.png" alt=""
    /></router-link>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
    <router-link to="/alugar" id="alugar-link" class="nav-link">Alugar</router-link>
    <a href="MinhasReservasComponent.vue" id="minhas-reservas-link" class="nav-link"
      >Minhas reservas</a
    >
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
  padding: 0.5rem;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.08);
}

a {
  font-family: 'Montserrat';
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font-family: 'Montserrat';
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  position: absolute;
  bottom: -5px;
  height: 2px;
  width: 100%;
  left: 0;
  background-color: black;
  transition: 0.2s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.entrar-link {
  color: white;
  background-color: var(--cor-principal);
  width: auto;
  height: 3.125rem;
  transition: 0.1s ease;
  padding-left: 1rem;
  padding-right: 1rem; 
}

.entrar-link:hover {
  background-color: var(--cor-principal-hover);
}

.logo-img {
  width: 200px;
  height: auto;
}

.search-bar {
  width: 25rem;
  height: 2.5rem;
  border: 1px solid var(--search-bar-border);
  border-radius: 20px;
  padding: 0.5rem;
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
  margin-left: 0.5rem;
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
  margin-top: 0.5rem;
  width: 100%;
  height: 0.5px;
  background-color: variables(--cor-linha-divisoria);
}

@media (max-width: 1400px) {
  .nav-container {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
  .logo-img {
    width: auto;
    max-width: 150px;
  }
  .search-bar {
    width: auto;
    margin-top: 0.5rem;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 1200px) {
  .nav-container {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
  .logo-img {
    width: auto;
    max-width: 150px;
  }
  .search-bar {
    width: auto;
    margin-top: 0.5rem;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 992px) {
  .nav-container {
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
  .search-bar {
    width: auto;
    margin-top: 0.5rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .nav-link {
    margin: 0.5rem auto;
    font-size: 0.9rem;
  }

  .entrar-link {
    width: auto;
    padding: 0.5rem;
  }
}

@media (max-width: 576px) {
  .logo-img {
    max-width: 120px;
  }
}
</style>
