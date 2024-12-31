/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#ffd9d4',
        urgent: '#d4d7ff',
      },
    },
  },
  plugins: [],
};
