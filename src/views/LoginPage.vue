<script setup></script>

<template>
  <div class="container">
    <div class="login-container">
      <section class="login-section"></section>
      <section class="illustration-section"></section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 700px;
  background-color: black;
}

.login-section {
  width: 500px;
  height: 100%;
  background-color: blue;
}

.illustration-section {
  width: 600px;
  height: 100%;
  background-color: green;
}
</style>
