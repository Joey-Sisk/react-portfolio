const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        indigo: colors.indigo,
        blueGray: colors.blueGray,
        violet: colors.violet,
        rose: colors.rose,
        amber: colors.amber,
      },
      animation: {
        "pulse-slow": "pulse 6s linear infinite",
        float: "float 6s infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-10px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
