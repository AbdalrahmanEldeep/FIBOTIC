/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  "./src/**/*.{html,js}",        
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
