import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: { max: "639px" },

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "login-img": 'url("./assets/images/login-background.jpg")',
        "cta-logo-one": 'url("./assets/images/cta-logo-one.svg")',
        "cta-logo-two": 'url("./assets/images/cta-logo-two.png")',
        logo: 'url("./assets/images/logo.svg")',
      },
    },
  },
  plugins: [],
};
