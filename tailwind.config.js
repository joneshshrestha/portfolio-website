/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'text-light': '#1a1a1a',
        'text-dark': '#ffffff',
        'primary-light': '#0066cc',
        'primary-dark': '#66b3ff',
        'muted-light': '#666666',
        'muted-dark': '#999999',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text-light'),
            a: {
              color: theme('colors.primary-light'),
              '&:hover': {
                color: theme('colors.primary-light'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.text-dark'),
            a: {
              color: theme('colors.primary-dark'),
              '&:hover': {
                color: theme('colors.primary-dark'),
              },
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
