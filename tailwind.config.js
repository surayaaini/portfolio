/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F1E6",      // canvas background
        secondary: "#6A1E1B",    // deep earthy red
        accent: "#D9742A",       // orange accent
        earth: "#7A6E4E",        // earth green
        neutral: "#BFB9A9",      // neutral gray
      },
    },
  },
  plugins: [],
};
