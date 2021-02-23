export default {
  target: 'static',
  router: {
    base: '/developer/'
  },
  generate: {
    dir: 'docs'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'developer',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'favicon.png'},
      {rel: "stylesheet", href: "assets/css/vendors/Bootstrap/bootstrap.min.css"},
      {rel: "stylesheet", href: "assets/css/plugins/navigation.min.css"},
      {rel: "stylesheet", href: "assets/css/main.min.css"},
      {rel: "stylesheet", href: "assets/css/theme-font.min.css"},
      {rel: "stylesheet", href: "assets/css/rtl.min.css"}
    ],
    script: [
      {src: "assets/js/jquery.min.js", body: true},
      {src: "assets/js/Bootstrap/bootstrap.bundle.min.js", body: true},
      {src: "assets/js/js-plugins/navigation.min.js", body: true},
      {src: "assets/js/js-plugins/material.min.js", body: true},
      {src: "assets/js/js-plugins/swiper.min.js", body: true},
      {src: "assets/js/js-plugins/smooth-scroll.min.js", body: true},
      {src: "assets/js/js-plugins/jquery.matchHeight.min.js", body: true},
      {src: "assets/js/main.js", body: true},
      {src: "assets/js/svg-loader.js", body: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Persian',
          code: 'fa',
          iso: 'fa-IR',
          file: 'fa.js',
          dir: 'rtl'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js',
          dir: 'ltr'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fa',
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
