import colors from 'vuetify/es5/util/colors'
export default {
  ssr: false,
  head: {
    titleTemplate: '',
    title: '全民打棒球PRO | 打者資料查詢/模擬組隊系統',
    htmlAttrs: { lang: 'zh-Hant-TW' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }],
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    'element-ui/lib/theme-chalk/index.css',
  ],
  plugins: [
    { src: '~/plugins/common.js' },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/ElementUI', ssr: true },
  ],
  components: true,
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['./assets/scss/variables.scss', './assets/abstracts/_mixins.scss'],
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {},
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {
    vendor: ['element-ui'],
  },
}
