/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        matteBlack: '#28282B',
        gray: "#A9A9A9",
        darkGray: "#71797E",
        lightGray: '#eeeeee',
        violet: '#8a2be2',
        darkViolet: '#5c1dbc',
        orange: '#ff7d62',
        darkOrange: '#ff6a4b',
        green: '#1AA478'
      },
      flex: {
        '1': '0 0 200px'
      }
    },
    screens: {
      'mobile': '480px',
      'tablet': '768px',
      'laptop': '1024px'
    }
  },
  plugins: [],
};
