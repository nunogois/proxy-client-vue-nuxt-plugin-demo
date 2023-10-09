<script setup>
import { useFlag, useFlagsStatus } from '@unleash/proxy-client-vue'

const { flagsReady } = useFlagsStatus()

const nuxtApp = useNuxtApp()
const unleashClient = nuxtApp.$unleashClient
console.info(`Unleash client is fetching from ${unleashClient.url}`)

const enabled = useFlag('vue-test-feature')
</script>

<template>
  <div v-if="!flagsReady">Loading...</div>
  <div v-else>
    <span v-if="enabled"> Vue test feature is enabled </span>
    <span v-else> Vue test feature is disabled </span>
  </div>
</template>
