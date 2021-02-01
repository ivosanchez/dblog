import conf from './conf'
export default {
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  //
  css: [
    // './assets/css/main.css',
    './assets/css/tailwind.css',
    './assets/css/spk.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
    // '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxt/content', '@nuxtjs/cloudinary'],
  //
  content: {
    dir: './content',
    liveEdit: true
    // router: {}
    // nestedProperties: ['author.name'],
  },
  cloudinary: {
    // cloudName: process.env.CLOUDNAME,
    cloudName: 'eyelites-es',
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    secure: true,
    privateCDN: false
  },
  router: {
    async extendRoutes(routes, resolve) {
      const { $content } = require('@nuxt/content')
      const { pages } = await $content(conf.CONTENT).fetch()
      pages.forEach((page) => {
        routes.push({
          path: page.path,
          component: resolve(__dirname, 'components/MetaPage.vue'),
          meta: page
        })
      })
    }
  },
  // ...........................
  build: {}
}
