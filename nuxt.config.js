import { createClient } from "@nuxtjs/sanity";
import fetch from "node-fetch";
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

const configSanity = {
  projectId: "adwp8zwu",
  useCdn: false,
  minimal: true,
  dataset: "production"
  // token: process.env.NODE_ENV == "development" ? process.env.SANITY_READ_TOKEN : ''
};
const client = createClient(configSanity);


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "trd-web2",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/fonts/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/preview.client.js",
    "~plugins/image-builder.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  tailwindcss: {
    jit: true
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sanity/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    trailingSlash: true
  },

  sanity: {
    ...configSanity,
    withCredentials: true
  }
};
