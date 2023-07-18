/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#403F4C",
        two: "#3185FC",
        tree: "#F9DC5C",
      },
    },
  },
  plugins: [],
};
