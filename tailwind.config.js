/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':"360px",
        "max-xs": { max: "380px" },
      },
      fontSize: {
        "2xs": ["10px", "12px"],
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        std: ["18px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "6xl": ["60px", "82px"],
      },
      fontFamily: {
        nunito: ["Nunito", "san-serif"],
      },
    },
  },
  plugins: [],
};