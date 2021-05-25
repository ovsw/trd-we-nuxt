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

const seoTitle = "Cursuri de Design 3D 3DS Max în Timișoara";
const seoDescription = "Instruire profesionala Design 3D, 3DS Max, Timișoara.";
const seoSocialShareImage = "/tridia-default-social-share-image.jpg";
const seoCannonicalUrl = "https://tridia.ro";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: seoTitle,
    titleTemplate: "%s | Tridia",
    htmlAttrs: {
      lang: "ro"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: seoDescription
      },
      {
        hid: "ogtitle",
        name: "og:title",
        content: seoTitle
      },
      {
        hid: "ogdescription",
        name: "og:description",
        content: seoDescription
      },
      {
        hid: "ogimage",
        name: "og:image",
        content: seoSocialShareImage
      },
      {
        hid: "msTitleColor",
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      {
        hid: "theme-color",
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "ZdK-Nn3jSbPWdEZhrWBdxluuEczPOKFZroVMSEU21sE"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "32x32",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ff7700" }
      // { rel: "cannonical", href: seoCannonicalUrl }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/fonts/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/preview.client.js",
    "~plugins/image-builder.js",
    "~plugins/filters.js",
    "~plugins/vue-typer.client.js",
    "~/plugins/jsonld"
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
    "@nuxtjs/svg-sprite",
    "@nuxtjs/sanity/module",
    "@nuxtjs/google-analytics",
    "nuxt-lazy-load"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-typeform", "@nuxtjs/sitemap"],

  sitemap: {
    hostname: "https://tridia.ro",
    gzip: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
    crawler: false,
    async routes() {
      const pages = await client.fetch(/* groq */ `*[_type == 'page']{
          ...,
          content {
  					...,
            sections1[]{
              ...,
              _type == 'staffSection' => {
                ...,
                staffList[]->{
                  ...
                }
              }
            } 
           
          }
        }`);
      const posts = await client.fetch(/* groq */ `*[_type == 'post'] {
        ...,
        content {
          ...,
          'mainImageUrl': mainImage.asset->url 
        }
      } | order(content.date asc)`);
      const staffMembers = await client.fetch(/* groq */ `*[_type == 'staffMember'] {
          ...
          }`);

      return [
        // {
        //   route: "/inscriere/"
        // },
        ...pages.map(page => {
          return {
            route: `/${page.content.slug.current}/`,
            payload: page
          };
        }),
        ...posts.map(page => {
          return {
            route: `/blog/${page.content.slug.current}/`,
            payload: page
          };
        }),
        ...staffMembers.map(page => {
          return {
            route: `/echipa/${page.content.slug.current}/`,
            payload: page
          };
        })
      ];
    }
  },

  router: {
    trailingSlash: true,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 200 },
          behavior: "smooth"
        };
      }
      return {
        x: 0,
        y: 0,
        behavior: "smooth"
      };
    }
  },

  sanity: {
    ...configSanity,
    withCredentials: true
  },

  googleAnalytics: {
    // Options
    id: "UA-196071438-1"
  }
};
