<template>
  <figure>
    <router-link to="/" class="logo-link">
      <img src="../../assets/logo.svg" class="logo" id="logo" alt="RüTüTa Logo">
    </router-link>
    <no-ssr>
      <pixel-grid class="grid"></pixel-grid>
    </no-ssr>
  </figure>
</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {
    components: {
      'no-ssr': NoSSR
    }
  }
</script>

<style scoped>
*::selection {
  appearance: none;
}
figure {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 52px;
  padding-bottom: 24px;
  margin: 0;
}
.logo {
  position: relative;
  z-index: 10;

  width: 640px;
  margin: 0 12px;

  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.25));
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
@media (max-width: 700px) {
  .logo {
    width: 95vw;
    margin: 0 auto;
  }
}
@media (max-width: 420px) {
  .logo {
    width: 90vw;
    opacity: 1;
  }
}
</style>

<style>
.p5Canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
