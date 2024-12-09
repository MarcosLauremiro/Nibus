/** @type {import('tailwindcss').Config} */

import conver from "./src/assets/Cover.svg"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#EFF2EF',
        backgroundImage: {
          'cover-login': "url('./src/assets/Cover.svg')",
        }
      },
    },
  },
  plugins: [],
};
