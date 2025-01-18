/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('./src/assets/home-bg.jpg')",
        homeBg2: "url('./src/assets/home-bg-2.jpg')",
      },
    },
  },
  plugins: [],
};
