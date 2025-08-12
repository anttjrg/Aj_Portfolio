/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',  // Violet-blue (primary color)
        secondary: '#3B82F6',  // Blue (secondary color)
        'dark-gray': '#1a1a1a',
        'light-gray': '#2a2a2a',
        'accent-green': '#10b981',
      },
    },
  },
  plugins: [],
}
