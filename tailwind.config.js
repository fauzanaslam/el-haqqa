/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#874CCC",
        secondary: "#C65BCF",
        tartiary: "#F27BBD",
        pink: "#EE9AE5",
        red: "#E72929",
        yellow: "#fadb4c",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
