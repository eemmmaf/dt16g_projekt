/** @type {import('tailwindcss').Config} */


    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}"
      ],
      theme: {
        extend: {
          colors: { 
            'main-color': '#FFF95E',
            'dark-color' : '#2D2C2C',
            'grey-color': '#5C5555',
            'light-color' : '#fcfcf5',
            'complement-color' : '#5E64FF'
        },
        fontFamily: {
          'headings': ['Manrope', 'Open-Sans', 'sans-serif'],
          'content': ['Open-sans', 'sans-serif']
        },
        container: {
          center: true,
        },
        fontSize: {
          sm: '1rem',
          base: '1.4rem',
          xl: '1.5rem',
          xxl: '2rem'
        }
        },
      },
      plugins: [],
    }
