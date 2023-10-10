import {
  UnleashClient,
  plugin as unleashPlugin
} from '@unleash/proxy-client-vue'

const config = {
  url: 'https://app.unleash-hosted.com/demo/api/frontend',
  clientKey:
    'proxy-client-vue:development.28d2246bf472159c395befee79623275882816bb9ff3e65c74f48e3c',
  refreshInterval: 2,
  appName: 'proxy-client-vue'
}

let unleashClient: UnleashClient | undefined

export default defineNuxtPlugin(nuxtApp => {
  if (!unleashClient) {
    unleashClient = new UnleashClient(config)
    nuxtApp.vueApp.use(unleashPlugin, { unleashClient })
  }

  return {
    provide: {
      unleashClient
    }
  }
})
