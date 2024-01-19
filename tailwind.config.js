/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        current: 'currentColor',
        primary: {
          DEFAULT: '#031434',
          light: '#303B54',
          medium: '#0A74DC',
        },
        green: {
          DEFAULT: '#00992B',
          light: '#A9FFE0',
        },
        blue: '#A9C1FF',
        pink: '#FFA9EC',
        yellow: '#FDFFA9',
        grey: '#A4A7B7',
        lightgrey: '#B0B9C8',
      },
      fontSize: {
        xs: '0.75rem',
        tiny: '0.825rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        DEFAULT: ' 0px 2px 6px 0px rgba(229, 229, 229, 0.30);)',
        none: 'none',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
