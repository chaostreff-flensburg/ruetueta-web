<template>
  <section class="layout">
    <ruetueta-header class="header"></ruetueta-header>
    <ruetueta-nav class="nav"></ruetueta-nav>

    <template v-if="$page.frontmatter.isHomepage">
      <section class="intro text card">
        <Content slot-key="intro-text"/>
      </section>
      <ruetueta-video class="intro video card" />
    </template>

    <main class="content">
      <Content/>
    </main>

    <ruetueta-footer class="footer"></ruetueta-footer>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');

html, body {
  --white: #fafafa;
  --black: #222;
  --dark-blue: #1D2B53;
  --dark-purple: #7E2553;
  --dark-green: #008751;
  --brown: #AB5236;
  --dark-gray: #5F574F;
  --light-gray: #C2C3C7;
  --off-white: #FFF1E8;
  --red: #FF004D;
  --orange: #FFA300;
  --yellow: #FFEC27;
  --green: #00E436;
  --blue: #29ADFF;
  --indigo: #83769C;
  --pink: #FF77A8;
  --peach: #FFCCAA;

  --max-site-width: 900px;
  --border-radius: 3px;
  --box-shadow: 0 4px 12px rgba(34, 34, 34, 0.25);

  margin: 0;

  color: var(--black);
  font-family: "Space Mono", monospace;
  line-height: 1.5;

  background-color: var(--black);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

a {
  color: inherit;
  font-weight: 700;
}

table {
  width: 100%;
}
th, td {
  padding: 8px;
}
th {
  border-bottom: 1px solid var(--black);
}
tr:nth-of-type(even) {
  background-color: var(--off-white)
}

.layout {
  display: grid;
  grid-template-columns: 1fr repeat(2, minmax(100px, calc(var(--max-site-width) / 2))) 1fr;
  grid-template-areas:
    'header header header header'
    'nav nav nav nav'
    '. content-left content-right .'
    '. content content .'
    'footer footer footer footer';
  grid-gap: 0 16px;
}
@media (max-width: 700px) {
  .layout {
    grid-template-areas:
    'header header header header'
    'nav nav nav nav'
    '. content-left content-left .'
    '. content-right content-right .'
    '. content content .'
    'footer footer footer footer';
  }
}
.header {
  grid-area: header;
}
.nav {
  grid-area: nav;
  margin-bottom: 32px;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}

.intro.text {
  grid-area: content-left;
}
.intro.video {
  grid-area: content-right;
}

main, .card {
  z-index: 10;
  padding: 12px 32px;
  margin-bottom: 32px;

  border-radius: var(--border-radius);
  background-color: var(--white);
  box-shadow: var(--box-shadow);
}
@media (max-width: 700px) {
  main, .card {
    padding: 12px 22px;
  }
}
</style>
