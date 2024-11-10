/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#A3D0EE',
        fontblue: '#17466E',
        click: '#17466E',
        bgdropdown: '#E5F1F9', // Move customBlue here
      },
    },
  },
  plugins: [],
}
