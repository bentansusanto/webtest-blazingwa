/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'poppins' : ['Poppins'],
      'lato' : ['Lato']
    },
    colors : {
      'bg-login' : '#F5F6FA',
      'black' : '#666666',
      'white' : '#ffffff',
      'green' : '#23A455',
      'red' : '#F40F0F',
      'button-facebook' : '#304F8B',
      'placeholder-input' : '#D1D1D1'

    }
  },
  plugins: [],
}