/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#ae14d9",
        'secondary': "#f3f5ff",
        'light': "#f9faff",
      },
    },
  },
  plugins: [],
}

