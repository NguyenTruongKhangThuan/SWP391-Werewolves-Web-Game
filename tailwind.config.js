/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        black: "#000",
        khaki: "#f8ffa3",
        moccasin: "#ffecba",
      },
      fontFamily: {
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
