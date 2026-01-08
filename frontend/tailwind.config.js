/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // Adjust based on your framework
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      }
    },
  },
  plugins: [],
};
