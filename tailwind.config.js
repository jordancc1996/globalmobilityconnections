/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'gmc-black': '#000000',
        'gmc-white': '#ffffff',
        'gmc-gray': '#666666',
        'gmc-light-gray': '#f8f8f8',
      },
    },
  },
  plugins: [],
}

