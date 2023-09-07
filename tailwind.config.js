/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#E91E63',
      },
      textColor: {
        'white': '#ffffff',
      },
    },
  },
  plugins: [require("daisyui")],
}

