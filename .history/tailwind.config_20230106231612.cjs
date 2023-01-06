/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}",        
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  darkMode: ['dark', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
