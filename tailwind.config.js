/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8f9fa',
        secondary: '#e9ecef',
        accent: '#4a90e2',
        text: '#2d3748',
      },
    },
  },
  plugins: [],
}
