// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['/assets/css/style.css'],
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,// viewTransitionをtrueにする
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
})