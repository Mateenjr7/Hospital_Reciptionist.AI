/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },

      },

      boxShadow: {

        soft:
          "0 10px 40px rgba(15, 23, 42, 0.08)",

        glow:
          "0 0 40px rgba(16, 185, 129, 0.25)",

        card:
          "0 8px 32px rgba(15,23,42,0.06)",

      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {

        float:
          "float 6s ease-in-out infinite",

        fade:
          "fade 0.4s ease-out",

        slide:
          "slide 0.5s ease-out",

        pulseSlow:
          "pulseSlow 4s infinite",

      },

      keyframes: {

        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },

          "50%": {
            transform: "translateY(-12px)"
          },
        },

        fade: {
          "0%": {
            opacity: 0
          },

          "100%": {
            opacity: 1
          },
        },

        slide: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)"
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0px)"
          },
        },

        pulseSlow: {
          "0%, 100%": {
            opacity: 1
          },

          "50%": {
            opacity: 0.6
          },
        },

      },

      borderRadius: {
        "4xl": "2rem",
      },

    },

  },

  plugins: [],

};