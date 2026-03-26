/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#7b2fff',
          cyan: '#00ffcc',
          pink: '#ff2d78',
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
