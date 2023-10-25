/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pp-light)', 'var(--font-pp-light-italic)', 'var(--font-gracia)']
      },
      colors: {
        'custom-white': '#E0E0E0',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
