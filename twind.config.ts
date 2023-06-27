import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      screens: {
        exsm: { max: "540px" },
        smTechCard: "640px",
        mdTechCard: "768px",
        lgTechCard: "1024px",
        xlTechCard: "1280px",
        "2xlTechCard": "1536px",
      },
      fontFamily: {
        //Set montserrat as default font
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#AA2129",
        primaryDark: "#420004",
        techCardColor: "#462B45",
      },
    },
  },
} as Options;
