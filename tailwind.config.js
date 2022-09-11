/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      cyberpunk: {
        1: '#ff2a6d',
        2: '#d1f7ff',
        3: '#05d9e8',
        4: '#005678',
        5: '#01012b',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
