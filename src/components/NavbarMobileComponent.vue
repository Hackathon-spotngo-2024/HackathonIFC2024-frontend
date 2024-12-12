<script setup>
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()

authStore.userFirstLetter = window.localStorage.getItem('UserFirstLetter')
</script>

<template>
  <div class="topo">
    <div class="imgTopo">
      <img class="img" src="../assets/logo.png" alt="" />
    </div>
    <div class="linha-container">
      <div class="linha-divisoria"></div>
    </div>
  </div>
  <div class="nav-container">
    <router-link to="/" class="home-link"
      ><img class="logo-img" src="../assets/home-icon.png" alt=""
    /></router-link>
    <router-link to="/minhas-reservas" id="Reservas-link" class="nav-link"
      ><img src="../assets/minhas-reservas-ison.png" alt=""
    /></router-link>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link"
      ><img src="../assets/anunciar-icon.png" alt=""
    /></router-link>

    <div class="profile-container">
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
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ><router-link to="/minhas-reservas">Suas reservas</router-link></a
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
    </div>
  </div>
</template>

<style scoped>
@import 'flowbite';
@tailwind base;
@tailwind components;
@tailwind utilities;

.linha-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.linha-divisoria {
  width: 300px;
  height: 1px;
  margin: 1.5rem 0rem 0 0;
  background-color: var(--cor-linha-divisoria);
}
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
  z-index: 999;

}
.nav-container img {
  width: 40px;
  height: 40px;
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

.entrar-link {
  color: white;
  background-color: var(--cor-principal);
  width: 4rem;
  height: 3rem;
  transition: 100ms ease;
}

.entrar-link-route {
  width: 100%;
  height: 100%;
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

.profile-container {
  width: fit-content;
  display: flex;
  justify-content: center;
}

.profile {
  width: 40px;
  height: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid var(--preto-alternativo);
}

#dropdownDefaultButton {
  transition: 220ms ease-in-out !important;
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
}

#dropdownDefaultButton:hover {
  background-color: #d8d8d8;
}

li a {
  text-align: center;
  border-radius: 0;
  transition: 220ms ease-in-out;
}

@media (max-width: 500px) {
  .nav-container button,
  .nav-container img {
    width: 28px;
    height: 28px;
    background: 0;
    outline: none;
    border: none;
  }
  .search-bar,
  .imgTopo {
    scale: 0.8;
  }
  .profile {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 380px) {
  .nav-container {
    width: 100dvw;
  }
  .nav-container button,
  .nav-container img {
    width: 25px;
    height: 25px;
    background: 0;
    outline: none;
    border: none;
  }
  .profile {
    width: 32px;
    height: 32px;
  }
}


@media (max-width: 370px) {
  .search-bar,
  .imgTopo {
    scale: 0.7;
  }
}
</style>
