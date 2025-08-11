/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',    // Deep navy background
        secondary: '#112240',  // Slightly lighter navy
        accent: '#64ffda',     // Mint green accent
        text: '#ccd6f6',       // Light blue-gray text
        'text-secondary': '#8892b0',  // Dimmer text
        'tech-card': 'rgba(17, 34, 64, 0.7)',  // Card background
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
