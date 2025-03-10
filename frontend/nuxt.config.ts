// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ['@pinia/nuxt']
})