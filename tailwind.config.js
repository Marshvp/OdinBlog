/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blogBlack: "rgb(68, 68, 68)",
        blogGrey: "rgb(228, 228, 228)",
        blogBlue: "rgb(65, 179, 211)",
        blogTeal: "rgb(97, 210, 220)",
      },
    },
  },
  plugins: [],
};
