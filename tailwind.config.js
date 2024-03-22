/** @type {import('tailwindcss').Config} */
import { wedgesTW } from "@lemonsqueezy/wedges";

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  plugins: [wedgesTW()],
};
