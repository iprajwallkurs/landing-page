/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'sans-serif']
      },
      colors: {
        ink: '#050608',
        mist: '#a7abb7'
      }
    }
  },
  plugins: []
};
