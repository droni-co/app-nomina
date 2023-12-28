// https://nuxt.com/docs/api/configuration/nuxt-config
import type { Nitro } from "nitropack";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: true,
    provider: {
        type: 'authjs'
    }
  },
  hooks: {
    'nitro:build:before': (nitro: Nitro) => {
        nitro.options.moduleSideEffects.push('reflect-metadata')
    }
  },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true
          }
        }
      }
    }
  }
})
