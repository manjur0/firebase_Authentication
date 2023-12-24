/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-right":
          "url('https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/bg-shape-1.png')",
        "hero-left":
          "url(https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/bg-shape-2.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
