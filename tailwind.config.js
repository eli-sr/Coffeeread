/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      lo: ['Lora Variable'],
      ws: ['Work Sans Variable'],
      ro: ['Rokkitt Variable'],
      od: ['OpenDyslexic']
    },
    extend: {
      colors: {
        dark: '#191919'
      }
    }
  },
  plugins: []
}
