<template>
  <section @click="clicked = true">
    <div v-if="!clicked" class="placeholder">
      <img class="icon" src="../../assets/youtube.svg" alt="Das Video zu den ersten 23. RüTüTa">
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

  min-height: 220px;

  background-image: url('../../assets/video-thumb.jpg');
  background-size: cover;
  cursor: pointer;
}
.placeholder {
  display: flex;
  justify-content: center;
  align-content: center;

  width: 100%;
}
.icon {
  width: 25%;
  height: auto;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.5));
}
iframe, .placeholder {
  width: 100%;

  border-radius: var(--border-radius);
}
</style>
