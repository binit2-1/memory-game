/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Bangers', 'cursive'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
