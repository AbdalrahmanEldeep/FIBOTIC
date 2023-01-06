/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}",        
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
}
