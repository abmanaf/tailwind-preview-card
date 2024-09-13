/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "1rem 1rem 0 #000000",
        initialCustom: "0.5rem 0.5rem 0 #000000",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      transitionDuration: {
        100: "0.1s",
      },
    },
  },
  plugins: [],
};
