/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "left-hero-img": "url('./assets/hero-left.jpg')",
      },
    },
  },
  plugins: [],
};
