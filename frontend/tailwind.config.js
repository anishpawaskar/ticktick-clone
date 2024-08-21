/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "630px",
      md: "900px",
      lg: "950px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
