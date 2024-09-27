/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#B3D4C3",
        secondary: "#016B43",
        tertiary: "#1BCF5A",
        accentgreen: "#003400",
        accentwhite: "#E3E9E5",
      }
    },
  },
  plugins: [],
}