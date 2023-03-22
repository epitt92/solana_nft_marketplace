const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
    },
    textShadow: {
      sm: '0 2px 4px var(--tw-shadow-color)',
      DEFAULT: '0 2px 8px var(--tw-shadow-color)',
      lg: '0 4px 20px var(--tw-shadow-color)',
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        24: 'repeat(24, minmax(0, 1fr))',
        48: 'repeat(48, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-28': 'span 28 / span 48',
      },
    },
    fontFamily: {
      mono: ['CygnitoMono'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
