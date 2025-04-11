/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        colors: {
          pastelPurple: '#E6E6FA', // light lavender
        },
        textShadow: {
          sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
          md: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.text-shadow-sm': {
            textShadow: '21px 21px 4px rgba(0, 0, 0, 0.4)',
          },
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
          },
          
          '.text-shadow-prpl': {
            textShadow: '1px 1px 4px rgba(101, 35, 154, 0.3)',
          },
        })
      }
    ],
  }