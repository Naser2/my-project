/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ['"Ovo", serif', ...defaultTheme.fontFamily.sans],
				cursive: ['cursive']
			}
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
  darkMode: "class"
}

