/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '0.2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ]
}