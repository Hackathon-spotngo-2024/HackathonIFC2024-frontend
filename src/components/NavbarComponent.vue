<script setup>
defineProps({
  openModal: Function,
  isModalOpen: Boolean,
})

const emit = defineEmits(['openModal']);


function modal(){
 emit('openModal')
}
</script>

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
    <button class="entrar-link" @click="modal">Entrar</button>
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
  border-radius: 30px;
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
  border-radius: 30px;
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
}


</style>
