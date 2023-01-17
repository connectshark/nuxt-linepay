export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt with LinePay',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/javascript.svg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    LINEPAY_CHANNEL_ID: process.env.NUXT_LINEPAY_CHANNEL_ID,
    LINEPAY_CHANNEL_SECRET: process.env.NUXT_LINEPAY_CHANNEL_SECRET,
    LINEPAY_RETURN_CANCEL_URL: process.env.NUXT_LINEPAY_RETURN_CANCEL_URL,
    LINEPAY_RETURN_CONFIRM_URL: process.env.NUXT_LINEPAY_RETURN_CONFIRM_URL,
    LINEPAY_RETURN_HOST: process.env.NUXT_LINEPAY_RETURN_HOST,
    LINEPAY_SITE: process.env.NUXT_LINEPAY_SITE,
    LINEPAY_VERSION: process.env.NUXT_LINEPAY_VERSION
  },
  tailwindcss: {
    viewer: false,
  }
})
