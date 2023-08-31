/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",

      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkTheme: "var(--darkTheme)",
        lightTheme: "var(--lightTheme)",
        "btn-secondaryr": "var(--btn-secondary)",
        "btn-primary": "var(--btn-primary)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "fade-in-left": "fadeInLeft 1s ease-in-out",
        "fade-in-right": "fadeInRight 1s ease-in-out",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     screens: {},
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         sm: "2rem",
//         lg: "4rem",
//         xl: "5rem",
//         "2xl": "6rem",
//       },
//     },

//     extend: {
//       colors: {
//         darkTheme: "var(--darkTheme)",
//         LightTheme: "var(--secondary-color)",
//         "btn-secondaryr": "var(--btn-secondary)",
//         "btn-primary": "var(--btn-primary)",
//       },
//     },
//   },
//   plugins: [],
// };
