<script setup>
const cardSectionTitle = "Os favoritos para você"
</script>

<template>
  <div id="card-section-title">{{ cardSectionTitle }}</div>
</template>

<style scoped>
#card-section-title {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 6rem 6rem;
}

@media (max-width: 1200px) {
    #card-section-title {
        font-size: 1.8rem;
        margin: 0 4rem 6rem;
    }
}

@media (max-width: 992px) {
    #card-section-title {
        font-size: 1.6rem;
        margin: 0 3rem 4rem;
    }
}

@media (max-width: 768px) {
    #card-section-title {
        font-size: 1.4rem;
        margin: 0 2rem 3rem;
    }
}

@media (max-width: 576px) {
    #card-section-title {
        font-size: 1.2rem;
        margin: 0 1rem 2rem;
    }
}
</style>
