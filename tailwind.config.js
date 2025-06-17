const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        'quint': ['Quintessential', 'sans-serif'],
        'tinos': ['Tinos', 'sans-serif'],
      },
      colors: {
        'primary-theme': '#f5f1e5',
        'text-primary': '#383839',
      }
    },
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
}