module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        colors1: "#ffffffff",
        red: { 400: "#ea4f4f", 900: "#b01111" },
        yellow: { 50: "#fff6e7" },
        orange: { 200: "#ffcc70", "200_00": "#ffcc7000" },
        blue_gray: { 50: "#f1f1f1" },
        colors: "#f1f1f1ff",
        amber: { 700: "#ffa500" },
        gray: {
          100: "#f6f5f3",
          600: "#7d7d7d",
          800: "#454545",
          900: "#131313",
        },
        green: { 900: "#008000", A700: "#25cc25" },
        lime: { 900: "#724a00", "900_6c": "#724a006c" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#ffcc70,#ffcc7000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
