/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        ivory: '#F6F7EB',
        onyx: '#393E41',
        keppel: '#44BBA4'
      }
    },
      ringColor: {
        'soapblue': '#3200FF'
      }
  },
  plugins: [
    require('tailwindcss-font-inter'),
  ],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
}

