/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css"
  ],
  theme: {
    extend: {
     
      fontFamily:{
        fredoka:['Fredoka', 'sans-serif']
      },
    },
  },
  plugins: [],
}
