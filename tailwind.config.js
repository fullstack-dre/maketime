// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: "#F7E11B",
    secondary: "#90E6F0",
    major: "#030303",
    minor: "#81817F",
    marble: "#F8F6F0",
  },
};

module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#F7E11B",
          800: "#BA9F26",
        },
        secondary: "#90E6F0",
        "custom-black": "#030303",
        "custom-gray": "#81817F",
        "custom-white": "#F8F6F0",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
