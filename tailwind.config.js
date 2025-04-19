/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors') // Import colors for easier use

export default {
    darkMode: 'class',
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
        // Add typography customization here
        typography: (theme) => ({
          DEFAULT: { // This targets light mode prose styles
            css: {
              '--tw-prose-body': theme('colors.gray[700]'), // Example: Darker gray for body text
              '--tw-prose-headings': theme('colors.gray[900]'), // Example: Darker headings
              '--tw-prose-lead': theme('colors.gray[600]'),
              '--tw-prose-links': theme('colors.blue[600]'),
              '--tw-prose-bold': theme('colors.gray[900]'),
              '--tw-prose-counters': theme('colors.gray[500]'),
              '--tw-prose-bullets': theme('colors.gray[300]'),
              '--tw-prose-hr': theme('colors.gray[200]'),
              '--tw-prose-quotes': theme('colors.gray[900]'),
              '--tw-prose-quote-borders': theme('colors.gray[200]'),
              '--tw-prose-captions': theme('colors.gray[500]'),
              '--tw-prose-code': theme('colors.indigo[600]'), // Example: Different code color
              '--tw-prose-pre-code': theme('colors.indigo[200]'),
              '--tw-prose-pre-bg': theme('colors.gray[100]'), // Example: Lighter code block bg
              '--tw-prose-th-borders': theme('colors.gray[300]'),
              '--tw-prose-td-borders': theme('colors.gray[200]'),
              // You can customize specific elements too:
              // h1: { color: theme('colors.black') },
              // p: { color: theme('colors.neutral[800]') },
              // 'code::before': { content: '""' }, // Optional: remove default backticks
              // 'code::after': { content: '""' },
            },
          },
          invert: { // This targets dark mode prose styles (dark:prose-invert)
            css: {
              '--tw-prose-body': theme('colors.gray[300]'),
              '--tw-prose-headings': theme('colors.white'),
              '--tw-prose-lead': theme('colors.gray[400]'),
              '--tw-prose-links': theme('colors.blue[400]'),
              '--tw-prose-bold': theme('colors.white'),
              '--tw-prose-counters': theme('colors.gray[400]'),
              '--tw-prose-bullets': theme('colors.gray[600]'),
              '--tw-prose-hr': theme('colors.gray[700]'),
              '--tw-prose-quotes': theme('colors.gray[100]'),
              '--tw-prose-quote-borders': theme('colors.gray[700]'),
              '--tw-prose-captions': theme('colors.gray[400]'),
              '--tw-prose-code': theme('colors.pink[300]'), // Example: Different dark code color
              '--tw-prose-pre-code': theme('colors.gray[300]'),
              '--tw-prose-pre-bg': 'rgba(0,0,0,0.3)', // Example: Darker semi-transparent code bg
              '--tw-prose-th-borders': theme('colors.gray[600]'),
              '--tw-prose-td-borders': theme('colors.gray[700]'),
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      function ({ addUtilities }) {
        addUtilities({
          '.text-shadow-sm': {
            textShadow: '21px 21px 4px rgba(0, 0, 0, 0.4)',
          },
          '.text-shadow-sm2': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
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