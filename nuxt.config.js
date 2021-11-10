export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Posta Vagas | Empregos Brasil',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.13.3/js/standalone/selectize.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap.min.css',
    '~/static/css/materialdesignicons.min.css',
    '~/static/css/fontawesome.css',
    '~/static/css/selectize.css',
    // '~/static/css/owl.carousel.css',
    // '~/static/css/owl.theme.css',
    // '~/static/css/owl.transitions.css',
    '~/static/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '~/static/js/jquery.js',
    //   mode: 'client'
    // },
    {
      src: '~/static/js/jquery.easing.min.js',
      mode: 'client'
    },
    {
      src: '~/static/js/jquery.nice-select.min.js',
      mode: 'client'
    },
    {
      src: '~/static/js/bootstrap.bundle.min.js',
      mode: 'client'
    },
    {
      src: '~/static/js/plugins.js',
      mode: 'client'
    },
    // {
    //   src: '~/static/js/selectize.min.js',
    //   mode: 'client'
    // },
    {
      src: '~/static/js/owl.carousel.min.js',
      mode: 'client'
    },
    // {
    //   src: '~/static/js/counter.int.js',
    //   mode: 'client'
    // },
    {
      src: '~/static/js/home.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  buildDir: 'dist',
  env: { baseUrl: process.env.baseUrl },
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  }
}
