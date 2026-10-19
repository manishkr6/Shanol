/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueberry: {
          50: '#F0F3FC',
          100: '#E1E7F9',
          200: '#C3CEF3',
          300: '#98ACEA',
          400: '#6683DE',
          500: '#415ECF',
          600: '#31449A', // Primary Royal Blueberry as referenced in brief
          700: '#27367D',
          800: '#202C66',
          900: '#18214D',
          950: '#0D122B',
          DEFAULT: '#31449A',
        },
        cream: {
          50: '#FDFAF4',
          100: '#FDF1D2', // Pale cream background token
          200: '#F8E9C2',
          300: '#FFD6A5', // Labelled Cream Soda token
          400: '#F7C688',
          500: '#EEAA58',
          DEFAULT: '#FDF1D2',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#B8901F',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-lg': '0 10px 30px -5px rgba(49, 68, 154, 0.1)',
        'soft-xl': '0 20px 40px -10px rgba(49, 68, 154, 0.15)',
        'glow': '0 0 25px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
}
