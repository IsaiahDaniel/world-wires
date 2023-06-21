const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBgImg': "url('/imgs/hero-bg-img.png')",
        'mobileHeroBgImg': "url('/imgs/mobile-hero-bg-img.png')",
        'aboutBgImg': "url('/imgs/about-bg.img.svg')",
        'mobileAboutBgImg': "url('/imgs/mobile-about-bg-img.svg')",
      }

    },
  },
  plugins: [],
});

