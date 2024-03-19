import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "vuetify/lib/styles/main.sass",
    "vuetify/styles",
    "~/assets/style.scss",
    "~/assets/styles/style.scss",
    "@mdi/font/css/materialdesignicons.css",
  ],

  sourcemap: { client: false, server: false },

  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({
            styles: { configFile: "assets/style.scss" },
          })
        )
      );
    },
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  // Head
  app: {
    head: {
      title: "Bendeq-app",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap",
        },
      ],
    },
  },
});
