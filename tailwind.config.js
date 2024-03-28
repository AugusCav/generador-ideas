/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "scale-up-tr": "scale-up-tr 0.4s ease-out   both",
        "scale-up-tl":
          "scale-up-tl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "scale-up-tr": {
          "0%": {
            transform: "scale(.5)",
            "transform-origin": "100% 0%",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "100% 0%",
          },
        },
        "scale-up-tl": {
          "0%": {
            transform: "scale(.5)",
            "transform-origin": "0% 0%",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "0% 0%",
          },
        },
      },
      colors: {
        indigo: {
          50: "#E8EAF6",
          100: "#C5CAE9",
          200: "#9FA8DA",
          300: "#7986CB",
          400: "#5C6BC0",
          500: "#3F51B5",
          600: "#3949AB",
          700: "#303F9F",
          800: "#283593",
          900: "#1A237E",
        },
      },
    },
  },
  plugins: [],
};
