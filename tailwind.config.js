const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ]
}
