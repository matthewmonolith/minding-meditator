/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        soft: {
          1: "#F3F2F7",
          2: "#DAD6F5",
          3: "#AFA6E9",
          4: "#9D92E9",
          5: "#877FE0",
          6: "#746CC7",
          7: "#6359B0",
          8: "#52469A",
        },
      },
    },
  },
  plugins: [],
};
