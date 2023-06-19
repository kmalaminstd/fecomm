/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "'Poppins', sans-serif",
        titleFont: "'Nunito', sans-serif"
      }
    },
  },
  plugins: [],
}

