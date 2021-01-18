export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Yoshihiro Fukuhara',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'keywords',
        content:
          'yoshihiro fukuhara, yoshihiro, fukuhara, gatheluck, robust, adversarial, AEs, machine learning, ml, ai, computer vision',
      },
      {
        hid: 'description',
        name: 'description',
        content: "Yoshihiro Fukuhara's page.",
      },
      {
        name: 'author',
        content: 'Yoshihiro Fukuhara',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: "Yoshihiro Fukuhara's page",
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Yoshihiro Fukuhara',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Yoshihiro Fukuhara's page.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/image/icon.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://gatheluck.net',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-187519692-1', // analytics code
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //
    'nuxt-fontawesome',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    base: '/home/',
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
}
