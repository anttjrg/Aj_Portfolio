/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',  // Violet-blue (primary color)
        secondary: '#3B82F6',  // Blue (secondary color)
      },
    },
  },
  plugins: [],
}
