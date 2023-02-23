/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          strong: "hsl(172, 67%, 45%)",
          "d-very": "hsl(183, 100%, 15%)",
          "d-grayish": "hsl(186, 14%, 43%)",
          grayish: "hsl(184, 14%, 56%)",
          "l-grayish": "hsl(185, 41%, 84%)",
          "l-very-grayish": "hsl(189, 41%, 97%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        formInput: "24px",
      },
    },
    fontFamily: {
      body: ["'Space Mono'", "monospace"],
    },
  },
  plugins: [],
};
