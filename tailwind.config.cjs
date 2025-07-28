/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#191BDF",
        secondary: "#09080D",
        tertiary: "#FE6807",
      },
    },
  },
  plugins: [],
};
