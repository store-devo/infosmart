/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#03AC0E",
        primaryLight: "#22C55E",
        primaryDark: "#028A0B",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, #028A0B, #03AC0E, #22C55E)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.25)",
        md: "2px 2px 4px rgba(0,0,0,0.35)",
        lg: "3px 3px 6px rgba(0,0,0,0.45)",
        glow: "0 0 8px rgba(3, 172, 14, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const shadows = theme("textShadow");
      const utilities = {};

      for (const key in shadows) {
        utilities[`.text-shadow-${key}`] = {
          textShadow: shadows[key],
        };
      }

      addUtilities(utilities);
    },
  ],
};
