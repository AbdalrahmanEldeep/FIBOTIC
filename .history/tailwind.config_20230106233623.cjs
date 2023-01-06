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
      'purple': '#1e293b',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
