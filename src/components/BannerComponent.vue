<script setup>
import banner from '../assets/banner.jpg'
</script>

<template>
  <div class="banner">
    <img class="img-banner" :src="banner" alt="">
  </div>
</template>

<style scoped>
.banner {
    display: flex;
    justify-content: center;
    margin: 6rem 0 4.6rem 0;
}

.img-banner {
    width: 1100px;
    height: 500px;
    border-radius: 25px;
}
</style>
