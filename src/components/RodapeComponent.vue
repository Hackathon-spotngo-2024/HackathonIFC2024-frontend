<script setup></script>

<template>
  <div class="rodape">
    <div class="info">
      <div class="empresa">
        <h3>Empresa</h3>
        <div class="links" id="links-empresa">
          <RouterLink to="/sobre" class="link">Sobre</RouterLink>
          <RouterLink to="/termos" class="link">Termos</RouterLink>
        </div>
      </div>
      <div class="contato" id="links-contato">
        <h3>Contato</h3>
        <div class="links">
          <RouterLink to="/ajuda" class="link">Ajuda/FAQ</RouterLink>
        </div>
      </div>
    </div>
    <div class="linha">
      <hr />
    </div>
    <div class="copy">
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
.link {
  text-decoration: none;
  color: black;
}

@media (max-width: 1100px) {
  .info {
    margin: 2rem auto;
  }
  .links, .copy {
    text-align: center;
  }
  .linha {
    margin: 4rem 2rem 0 2rem;
  }
  .copyright {
    margin: 1.5rem 0 1.5rem 0;
  }
}

@media (max-width: 500px) {
  .info {
    font-size: 14px;
  }
  .rodape {
    height: 300px;
  }
  .linha {
    margin: 1rem 2rem 0 2rem;
  }
}
</style>
