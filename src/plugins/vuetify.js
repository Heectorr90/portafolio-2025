import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          background: "#081b29", // Color de fondo principal
          surface: "#112e42", // Color de superficie/tarjetas
          primary: "#00abf0", // Color principal (cyan brillante)
          secondary: "#112e42", // Color secundario
          accent: "#00abf0", // Color de acento
          error: "#FF5252",
          info: "#00abf0",
          success: "#4CAF50",
          warning: "#FFC107",
          text: "#ededed", // Color de texto
        },
      },
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#F5F5F5",
          primary: "#00abf0",
          secondary: "#112e42",
          accent: "#00abf0",
          error: "#FF5252",
          info: "#00abf0",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
  defaults: {
    VBtn: {
      color: "primary",
      variant: "flat",
      rounded: "lg",
    },
    VCard: {
      elevation: 8,
      rounded: "lg",
    },
  },
});
