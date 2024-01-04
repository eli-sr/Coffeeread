/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      qs: ['Quicksand Variable'],
      ft: ['Figtree Variable'],
      lo: ['Lora Variable']
    },
    extend: {
      colors: {
        dark: '#191919'
      }
    }
  },
  plugins: []
}
