module.exports = {
  title: '42. Rüspeler Tüfteltage',
  description: 'Das Frickelfestival im Kliemannsland. 17.-19. Mai 2019',
  locales: {
    // Vuepress uses the default lang-attribute 'en-US'
    '/': {
      lang: 'de-DE', // this will be set as the lang attribute on <html>
    }
  },
  dest: "./docs",
  markdown: {
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.set({ breaks: true })
    }
  }
}
