/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B4F2F", // koyu yeşil
          900: "#083A23",
          700: "#0B4F2F",
          600: "#116240",
          100: "#E5F2EC",
        },
        accent: {
          DEFAULT: "#C65500", // koyu turuncu
          700: "#A84A00",
          600: "#C65500",
          100: "#FFE7D6",
        },
        base: {
          DEFAULT: "#FFFFFF",
        }
      },
      container: {
        center: true,
        padding: "1rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
