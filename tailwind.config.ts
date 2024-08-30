/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,tsx, vue}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        // mulish: "'Mulish', sans-serif",
        sans: "'Mulish', 'system-ui', sans-serif"
      },
      colors: {
        colorSurface: '#000000', // 0/20
        colorSurfaceSecondary: '#121212', // 4/30
        colorOnSurface: '#9e9e9e', // 14/20
        textColorPrimary: '#cfcfcf', // 18/20
        textColorSecondary: '#868686', // 12/20
        textColorDisabled: '#626262', // 9/20
        textColorDisabledSecondary: '#494949', // 7/20
        cardBackgroundPrimary: '#202122', // 9/25
        borderPrimary: '#3b3b3b'
      }
    }
  },
  plugins: []
}
