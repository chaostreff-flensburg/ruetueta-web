<template>
  <section @click="clicked = true">
    <div class="placeholder">
      <img v-if="!clicked" class="icon" src="../../assets/youtube.svg">
    </div>
    <iframe v-if="clicked" src="https://www.youtube-nocookie.com/embed/TijSQYZoRUU" frameborder="0" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {
  data() {
    return {clicked: false}
  }
}
</script>


<style scoped>
section {
  display: flex;
  justify-content: center;
  align-content: center;

  background-image: url('../../assets/video-thumb.jpg');
  background-size: cover;
  cursor: pointer;
}
.placeholder {
  display: flex;
  justify-content: center;
  align-content: center;
}
.icon {
  width: 25%;
  height: auto;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.1));
}
iframe, .placeholder {
  width: 100%;
  height: 200px;

  border-radius: var(--border-radius);
}
</style>
