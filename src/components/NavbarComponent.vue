<script setup>
import { useModal } from '../../stores/dadosModal';

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
defineProps({
  openModal: Function,
  isModalOpen: Boolean,
})

const modalStore = useModal()
</script>

<template>
  <div class="nav-container">
    <router-link to="/" class="home-link"><img class="logo-img" src="../assets/logo.png" alt="" /></router-link>
    <a href="#card-section-title" @click.prevent="scrollTo('card-section-title')" class="nav-link">Alugar</a>
    <router-link to="/minhas-reservas" id="Reservas-link" class="nav-link">Minhas reservas</router-link>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Procure seu spot" class="search-input" />
    </div>
    <router-link to="/anunciar" id="anunciar-link" class="nav-link">Anunciar</router-link>
    <div class="profile-container">
      <button class="entrar-link" @click="modalStore.openLoginModal" v-if="modalStore.isUserLogado == false" >Entrar</button>
      <img class="profile" v-if="modalStore.isUserLogado" src="/src/assets/profileimg.png" alt="">
    </div>
  </div>
  <div class="linha-container">
    <div class="linha-divisoria"></div>
  </div>
</template>

<style scoped>

.imgUsuario{
  height: 40px;
  width: 40px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 10rem 0 10rem;
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

@media (max-width: 1400px) {
  .nav-container {
    align-items: center;
    font-size: 14px;
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

@media (max-width: 1130px){
  .nav-container{
    font-size: 12px;
    margin: 16px 140px 16px;
  }
  .search-bar{
    scale: 0.9;
  }
  .entrar-link{
    scale: 0.9;
  }
}

@media (max-width: 1100px){
  .search-bar{
    width: 160px;
  }
  .search-input{
    width: 120px;
    font-size: 14px;
  }
}

/**/

@media (max-width: 1000px) {
  .nav-container {
    margin: 16px 130px 16px;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
  .logo-img{
    scale: 0.8;
  }
}

@media (max-width: 952px){
  .nav-container{
    text-align: center;
    padding: 8px;
    
  }
}

@media (max-width: 910px){
  .nav-container{
    scale: 0.9;
    gap: 0;
    margin: 10px 80px;
  }
}

@media (max-width: 875px){
  .logo-img{
    scale: 0.7;
  }
  .entrar-link{
    scale: 0.9;
  }
  .nav-container{
    margin: 10px 90px 10px;
    font-size: 14px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .search-bar{
    scale: 0.8;
  }
  
.profile-container {
  display: flex;
  justify-content: center;
}

.profile {
  width: 35px;
  margin-right: 1rem;
}


</style>
