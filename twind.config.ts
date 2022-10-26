import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        //Set montserrat as default font
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#AA2129",
        primaryDark: "#420004",
      }
    }
  }
} as Options;
