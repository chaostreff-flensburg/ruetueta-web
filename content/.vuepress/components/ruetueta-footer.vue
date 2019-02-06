<template>
  <footer>
    <section>
      <p>Eine Veranstaltung des <a href="https://chaostreff-flensburg.de/">Chaostreff Flensburg e.V.</a></p>
      <router-link to="/impressum.html">Impressum & Datenschutz</router-link>
    </section>
  </footer>
</template>

<style scoped>
footer {
  z-index: 10;
  padding: 24px 0;
  margin-top: 32px;

  color: var(--white);
  background-color: var(--black);
}
section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  max-width: var(--max-site-width);

  font-size: 14px;
}
a {
  text-decoration: none;
}
</style>
