/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF4869",
        "primary-hover": "#FF859B",
        "custom-gray-100": "#E7E7E8",
        "custom-gray-200": "#D0D4D7",
        "custom-gray-300": "#8B8B8B",
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};
