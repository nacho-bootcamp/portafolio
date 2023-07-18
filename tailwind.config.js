/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      px: "1px",
      110: "110px",
      120: "120px",
    },
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
