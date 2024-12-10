<script setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

authStore.userFirstLetter = window.localStorage.getItem('UserFirstLetter')
</script>

<template>
  <div class="nav-container">
    <router-link to="/" class="home-link"
      ><img class="logo-img" src="../assets/logo.png" alt=""
    /></router-link>
    <a href="#card-section-title" @click.prevent="scrollTo('card-section-title')" class="nav-link"
      >Alugar</a
    >
    <router-link to="/minhas-reservas" id="Reservas-link" class="nav-link"
      >Minhas reservas</router-link
    >
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link">Anunciar</router-link>
    <div class="divisoria"></div>
    <div class="profile-container">
      <div class="profile" v-if="authStore.isAuthenticated">
        <div class="dropdown">
          <button
            class="btn profile-btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ authStore.userFirstLetter.toUpperCase() }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Suas informações</a></li>
            <li>
              <button class="dropdown-item" @click="authStore.logout">Sair</button>
            </li>
          </ul>
        </div>
      </div>

      <button class="entrar-link" v-if="!authStore.isAuthenticated">
        <router-link class="entrar-link-route" to="/login">Entrar</router-link>
      </button>
    </div>
  </div>
  <div class="linha-container">
    <div class="linha-divisoria"></div>
  </div>
</template>

<style scoped>
.imgUsuario {
  height: 40px;
  width: 40px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 11rem 0 11rem;
  border-radius: 40px;
  padding: 0.5rem;
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
  content: '';
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
  width: 5.5rem;
  height: 3rem;
  transition: 200ms ease-in-out;
}

.entrar-link-route {
  color: white;
}

.entrar-link:hover {
  background-color: var(--cor-principal-hover);
}

.logo-img {
  margin-left: 10px;
  width: 170px;
  height: 35px;
}

.search-bar {
  width: 23rem;
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
  color: var(--cor-search-icon);
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
  margin: 1.5rem 0rem 0 0;
  background-color: var(--cor-linha-divisoria);
}

.divisoria {
  height: 2.3rem;
  width: 1px;
  background-color: var(--search-bar-border);
}

.profile-container {
  width: fit-content;
  display: flex;
  justify-content: center;
}

.profile {
  margin-right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
}

.profile-btn {
  transition: 280ms ease-in-out !important;
  width: 100%;
  height: 100%;
  background: none;
  font-weight: 600;
  color: var(--preto-alternativo);
  border: none;
}

.profile-btn:hover {
  background-color: #dfd7d7;
}

#dropdownMenuButton {
  transition: 280ms ease-in-out !important;
}

.dropdown-item {
  font-family: var(--fonte-principal) !important;
  border-radius: 0 !important;
  font-size: 14px !important;
}

.dropdown-item:active {
  background-color: transparent !important;
  color: #dfd7d7 !important;
}

@media (max-width: 1500px) {
  .nav-container {
    align-items: center;
  }
  .logo-img {
    width: auto;
    max-width: 180px;
  }
  .search-bar {
    width: auto;
    scale: 1;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 1250px) {
  .nav-container {
    margin: 16px 140px 16px;
  }
  a {
    font-size: 14px;
  }
  .search-bar {
    scale: 0.9;
  }
  .entrar-link {
    scale: 0.9;
  }
}

@media (max-width: 1200px) {
  .nav-container {
    margin: 16px 130px 16px;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
  .logo-img {
    scale: 0.8;
  }
}

@media (max-width: 1090px) {
  .nav-container {
    margin: 16px 130px 16px;
  }
  a {
    font-size: 14px;
  }
  .home-link {
    width: 160px;
  }
  .logo-img {
    scale: 0.8;
  }
}
</style>
