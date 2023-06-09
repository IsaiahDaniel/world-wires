/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topBgImg': "url('/imgs/top-bg-image.svg')",
        'mobileTopBgImg': "url('/imgs/mobile-top-bg-img.svg')",
        'mobileDownBgImg': "url('/imgs/mobile-down-bg-img.svg')",
        'downBgImg': "url('/imgs/down-bg-img.svg')",
      },
    },
  },
  plugins: [],
}

