/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teals: {
          1: "#0FC2C0", // Teals-1
          2: "#0CABA8", // Teals-2
          3: "#008F8C", // Teals-3
          4: "#015958", // Teals-4
          5: "#023535", // Teals-5
        },
        northernLights: {
          1: '#024059', // Northern-Lights-1
          2: '#026873', // Northern-Lights-2
          3: '#04BF8A', // Northern-Lights-3
          4: '#025940', // Northern-Lights-4
          5: '#03A64A', // Northern-Lights-5
        },
      },
    },
  },
  plugins: [],
};
