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
        colorSurface: '#000000',
        colorSurfaceSecondary: '#141414',
        colorOnSurface: '#F6E9E9',
        textColorPrimary: '#808080',
        textColorSeconday: '#595959',
        borderPrimary: '#3b3b3b'
      }
    }
  },
  plugins: []
}
