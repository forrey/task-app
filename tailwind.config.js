/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "ta-background": "#F7FAFC",
      white: "#FFFFFF",
      b10: "#365BFC",
      b15: "#4468FF",
      b20: "#5A7AFF",
      b30: "#8199FF",
      b40: "#A8B9FF",
      b50: "#BFCBFF",
      b60: "#D4DDFF",
      b70: "#EBEFFF",
      b80: "#F8F9FF",
      d10: "#222222",
      d20: "#4B4B4B",
      d30: "#686868",
      d40: "#7C7C7C",
      d50: "#979797",
      d60: "#B7B4B4",
      d65: "#CCCACA",
      d70: "#EAE7E7",
      d80: "#F5F5F5",
      critical: "#F95151",
      high: "#FD8948",
      medium: "#F4C15D",
      low: "#9FCC3E",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "roboto", "sans-serif"],
      },
      boxShadow: {
        "card-shadow": "0px 0px 3px 0px #EBEFFF, 0px 0px 10px 0px #EBEFFF",
      },
      margin: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
