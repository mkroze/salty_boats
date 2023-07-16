/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //palette of colours to use on 
      colors: {
        'dblue': '#042D43',
        'lgreen': '#6E9D60',
        'cpink': '#FFE8D3',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}

