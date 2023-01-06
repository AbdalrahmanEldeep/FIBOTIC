/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  "./src/**/*.{html,js}",        
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
    colors:{
      'purple': '#3ab7bf',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
