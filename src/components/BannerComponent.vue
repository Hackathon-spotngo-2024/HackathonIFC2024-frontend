<script setup>
import banner from '../assets/banner.jpg'
</script>

<template>
  <div class="banner">
    <img class="img-banner" :src="banner" alt="Banner">
  </div>
</template>

<style scoped>
.banner {
    display: flex;
    justify-content: center;
    margin: 6rem 0 4.6rem 0;
}

.img-banner {
    width: 100%;
    max-width: 1100px;
    height: auto;
    border-radius: 25px;
}

@media (max-width: 1200px) {
    .img-banner {
        max-width: 90%;
    }
}

@media (max-width: 992px) {
    .img-banner {
        max-width: 80%;
    }
}

@media (max-width: 768px) {
    .img-banner {
        max-width: 100%;
        border-radius: 15px;
    }
}

@media (max-width: 576px) {
    .img-banner {
        border-radius: 10px;
    }
}
</style>
