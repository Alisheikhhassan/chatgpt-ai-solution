/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",      // your App‑Router pages
      "./components/**/*.{js,jsx,ts,tsx}",   // your own components
      // if you ever use src/pages or public, you can add those too
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  