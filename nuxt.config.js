const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue.js summit 2018 – 31/08 - 01/09 em São Paulo, Brasil | Vue.js Summit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: "A maior experiência Vue.js da america latina!" },
      { name: 'description', content: '' },
      { property: 'og:title', content: 'Vue.js summit 2018 – 31/08 - 01/09 em São Paulo, Brasil | Vue.js Summit' },
      { property: 'og:site_name', content: 'Vue.js summit 2018 – 31/08 - 01/09 em São Paulo, Brasil | Vue.js Summit' },
      { property: 'og:url', content: 'http://conf.vuejs.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'A maior experiência Vue.js da america latina!' },
      { property: 'og:image', content: 'img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@vueconf' },
      { property: 'twitter:image', content: 'http://conf.vuejs.org/img/cover.png' },
      { property: 'twitter:title', content: 'Vue.js summit 2018 – 31/08 - 01/09 em São Paulo, Brasil | Vue.js Summit' },
      { property: 'twitter:description', content: 'A maior experiência Vue.js da america latina!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-48.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext' },
    ],
    script: [
      { type: 'text/javascript', src: '/sw.js' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/analytics', ssr: false },
    { src: '~plugins/cookies', ssr: false },
    { src: '~plugins/offline.js', ssr: false }
  ],
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    },
    extend (config) {
      // config.resolve.alias['~components'] = path.resolve(__dirname, 'src/components')
    },
  },
}
