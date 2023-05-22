/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-rgba": "rgba(200, 200, 200, 0.50)"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

