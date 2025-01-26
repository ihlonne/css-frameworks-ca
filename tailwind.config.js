/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './feed/**/*.html',
    './profile/**/*.html',
    './create-post/**/*.html',
    './src/**/*.{js, html}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#78a389',
        darkest: '#2f2f3d',
        dark: '#5e5e7a',
        mid: '#9191a9',
        light: '#d3d3ee',
        lightest: 'fff',
      },
      fontFamily: {
        logo: ['Slackey', 'serif'],
      },
    },
  },
  plugins: [],
};
