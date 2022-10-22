/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: `"Open Sans", "sans-serif"`,
    },
    extend: {
      colors: {
        primary: {
          100: "#d4f4fa",
          200: "#a9e9f5",
          300: "#7fdfef",
          400: "#54d4ea",
          500: "#29c9e5",
          600: "#21a1b7",
          700: "#197989",
          800: "#10505c",
          900: "#08282e",
        },
        seconday: {
          100: "#ccf3e2",
          200: "#99e7c5",
          300: "#66dca7",
          400: "#33d08a",
          500: "#00c46d",
          600: "#009d57",
          700: "#007641",
          800: "#004e2c",
          900: "#002716",
        },
      },
    },
  },
  plugins: [],
};
