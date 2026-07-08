/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17232e",
        navy: "#20394d",
        gold: "#d88b2b",
        sand: "#f3eee5",
        mist: "#eef2f3",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 35, 46, 0.10)",
      },
    },
  },
  plugins: [],
};
