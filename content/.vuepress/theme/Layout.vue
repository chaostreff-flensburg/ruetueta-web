<template>
  <section class="layout">
    <ruetueta-header class="header"></ruetueta-header>

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

<script>
import qs from 'qs';

export default {
  mounted() {
    const { theme } = qs.parse(location.search.substr(1));
    if (theme) {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }
}
</script>

<style>
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

  --foreground: var(--theme-foreground, var(--black));
  --background-off: var(--theme-background-off, var(--off-white));
  --background: var(--theme-background, var(--white));
  --shadow: var(--theme-shadow, rgba(34, 34, 34, 0.25));

  --max-site-width: 900px;
  --border-radius: 3px;
  --box-shadow: 0 4px 12px var(--shadow);

  margin: 0;

  color: var(--foreground);
  font-family: "Space Mono", monospace;
  line-height: 1.5;

  background-color: var(--background);
}

html.theme-dark {
  --theme-foreground: var(--white);
  --theme-background: var(--black);
  --theme-background-off: var(--dark-blue);
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
  border-bottom: 1px solid var(--foreground);
}
tr:nth-of-type(even) {
  background-color: var(--background-off)
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
  background-color: var(--background);
  box-shadow: var(--box-shadow);
}
@media (max-width: 700px) {
  main, .card {
    padding: 12px 22px;
  }
}
</style>

<style>
/* space-mono-regular - latin */
@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src:
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* space-mono-italic - latin */
@font-face {
  font-family: 'Space Mono';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src:
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* space-mono-700 - latin */
@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src:
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* space-mono-700italic - latin */
@font-face {
  font-family: 'Space Mono';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src:
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-700italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/space-mono-v4-latin/space-mono-v4-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
</style>
