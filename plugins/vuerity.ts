// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

import { ar } from "vuetify/locale";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    locale: {
      locale: "ar",
      fallback: "en",
      messages: { ar },
    },

    theme: {
      defaultTheme: "MAIN_THEME",
      themes: { MAIN_THEME },
    },

    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    components,
    directives,
  });
  nuxtApp.vueApp.use(vuetify);
});
