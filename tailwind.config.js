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
        bgdropdown: '#E5F1F9',
        iconig: '#246AA4',
        border: '#609AC1',
        button: '#227AA7', // Move customBlue here
      },
    },
  },
  plugins: [],
}
