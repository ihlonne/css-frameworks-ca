/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'], // Scan HTML and TypeScript files
  theme: {
    extend: {
      colors: {
        brand: '#fd4d8e',
        darkest: '#0a0c0e',
        dark: '#383a3d',
        mid: '#b8bfc6',
        light: '#d6dee7',
        lightest: 'fff',
      },
      fontFamily: {
        logo: ['Slackey', 'serif'],
      },
    },
  },
  plugins: [],
};
