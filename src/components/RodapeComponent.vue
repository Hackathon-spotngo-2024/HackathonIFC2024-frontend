<script setup></script>

<template>
  <div class="rodape">
    <div class="info">
      <div class="empresa">
        <h3>Empresa</h3>
        <div class="links" id="links-empresa">
          <a class="sobre">Sobre</a>
          <a class="termos">Termos</a>
        </div>
      </div>
      <div class="contato" id="links-contato">
        <h3>Contato</h3>
        <div class="links">
          <a class="contato">Ajuda/FAQ</a>
        </div>
      </div>
    </div>
    <div class="linha">
      <hr />
    </div>
    <div>
      <p class="copyright">&copy; 2024 Spot'n Go.</p>
    </div>
  </div>
</template>

<style scoped>
.rodape {
  display: flex;
  flex-direction: column;
  background-color: var(--search-bar-fill);
  width: 100%;
  height: 22rem;
  margin-top: 6rem;
  margin-bottom: 0;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info {
  margin: 2rem 0 0 6rem;
  display: flex;
  gap: 6rem;
  font-family: 'Montserrat';
}

h3 {
  margin-bottom: 1rem;
}

a {
  font-family: 'Montserrat';
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.linha {
  margin: 9rem 2rem 0 2rem;
}

.copyright {
  font-family: var(--fonte-principal);
  margin: 2rem 0 2rem 6rem;
}
</style>
