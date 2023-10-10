// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/unleash.ts', '~/plugins/post-unleash.ts']
})
