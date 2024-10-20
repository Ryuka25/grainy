// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          defer: true,
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          "data-cf-beacon": '{"token": "9d6bbecd96e94217a916d2bbf2a1a576"}',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    // "@nuxtjs/turnstile",
    // "@nuxt/scripts",
    "nuxt-svgo",
    "@nuxt/scripts",
    "@nuxtjs/turnstile",
  ],
  colorMode: {
    classSuffix: "",
  },
  turnstile: {
    // Check for local test: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
    siteKey: "0x4AAAAAAAx59Y_lpTiKTv7A",
  },
});
