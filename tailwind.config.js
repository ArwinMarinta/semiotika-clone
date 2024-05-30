/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        UTAMA: "#002687",
        YELLOW01: "#FF9C01",
        GRAY01: "#313131",
        GRAY02: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
