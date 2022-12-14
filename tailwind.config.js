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
      transparent: 'transparent',
    },
    extend: {
      backgroundSize: {
        '200%_100%': '200% 100% ',
      },
      backgroundImage: {
        navbar_gradient:
          'linear-gradient(to right, #01012b 50%, transparent 50%)',
        polygon_pattern: "url('/images/Trianglify.jpg')",
      },
      animation: {
        polygon_anim: 'pan 6s infinite alternate linear',
        border_nav_anim: 'border_bottom_anim .5s linear forwards',
        border_nav_anim_reverse:
          'border_bottom_anim_reverse .5s linear reverse forwards ',
      },
      keyframes: {
        pan: {
          '100%': { backgroundPosition: '25% 75%' },
        },
        border_bottom_anim: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        border_bottom_anim_reverse: {
          '100%': { width: '100%' },
          '0%': { width: '0' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
