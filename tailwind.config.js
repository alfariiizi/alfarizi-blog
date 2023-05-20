/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-color": "#030912",
        "background-color-spectrum": {
          100: "#cdced0",
          200: "#9a9da0",
          300: "#686b71",
          400: "#353a41",
          500: "#030912",
          600: "#02070e",
          700: "#02050b",
          800: "#010407",
          900: "#010204",
        },
        "text-white-color": "#E0EBFA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
