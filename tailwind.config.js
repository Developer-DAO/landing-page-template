/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
        },
        secondary: {
          DEFAULT: "#FBBF24", // Tailwind's yellow-400
          hover: "#F59E0B", // Tailwind's yellow-500
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
