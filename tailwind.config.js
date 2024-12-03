/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          customBackground: "#03294c",
          inputColor: "#1b3a5d",
          textColor: "#5e7fa4",
          buttonColor: "#5c768f",
        },
        green: {
          logoText: "#76d9e1",
        },
      },
    },
  },
  plugins: [],
};
