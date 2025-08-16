// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/leaflet',
  ],
  css: ['~/assets/css/main.css'],
  $meta:[],
  ssr:false,
  app: {
    baseURL: '/npv-preview/',
    buildAssetsDir: 'assets/',
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  pwa: {
    manifest: {
      name: 'Test App PWA',
      short_name: 'MAK PWA',
      description: '',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
    },
    workbox: {
    },
    registerType: 'autoUpdate',
    client: {
      installPrompt: true,
    },
    injectRegister: 'auto',
  },
})