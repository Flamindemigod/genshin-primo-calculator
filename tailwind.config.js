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
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      colors: {
        primary: {
          100: "#cce6e6",
          200: "#99cccc",
          300: "#66b3b3",
          400: "#339999",
          500: "#008080",
          600: "#006666",
          700: "#004d4d",
          800: "#003333",
          900: "#001a1a",
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
