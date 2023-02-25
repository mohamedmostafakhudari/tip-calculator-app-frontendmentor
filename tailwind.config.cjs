/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        cyanStrong: "hsl(172, 67%, 45%)",
        cyanDarkVery: "hsl(183, 100%, 15%)",
        cyanDarkGrayish: "hsl(186, 14%, 43%)",
        cyanGrayish: "hsl(184, 14%, 56%)",
        "cyan-l-grayish": "hsl(185, 41%, 84%)",
        "cyan-l-very-grayish": "hsl(189, 41%, 97%)",
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
