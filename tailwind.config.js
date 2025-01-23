/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button-box-shadow': '2px 4px 6px rgba(255, 255, 255, 0.2)'
      }
    },
  },
  plugins: [],
}