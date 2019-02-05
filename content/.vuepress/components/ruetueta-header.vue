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

  min-height: 35vh;
  padding-top: 24px;
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
