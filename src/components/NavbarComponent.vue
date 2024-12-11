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
    <div class="profile-container">
    <div class="divisoria" v-if="authStore.isAuthenticated"></div>
      <div class="profile" v-if="authStore.isAuthenticated">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-black focus:outline-none font-bold text-center items-center"
          type="button"
        >
          {{ authStore.userFirstLetter.toUpperCase() }}
          <svg
            class="w-2.5 h-2.5 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Suas informações</a
              >
            </li>
            <li>
              <a
                @click="authStore.logout"
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sair</a
              >
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
@import 'flowbite';
@tailwind base;
@tailwind components;
@tailwind utilities;

.imgUsuario {
  height: 40px;
  width: 40px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
  gap: 5rem;
  margin: 2rem auto 0 auto;
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
  transition: 100ms ease;
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
  padding: 0;
  box-shadow: none !important;
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
  margin-right: 2rem;
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
  width: 40px;
  height: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

#dropdownDefaultButton {
  transition: 220ms ease-in-out !important;
  background-color: #ececec !important;
  width: 100%;
  height: 100%;
  border-radius: 25px;
}

#dropdownDefaultButton:hover {
  background-color: #d8d8d8 !important;
}

li a {
  border-radius: 0;
  font-size: 14px;
  transition: 220ms ease-in-out;
}

@media (max-width: 1500px) {
  .nav-container {
    align-items: center;
    gap: 3rem;
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
    gap: 2rem;
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
  .logo-img {
    scale: 0.8;
  }
  .profile {
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
