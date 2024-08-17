/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "900px",
      lg: "950px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
