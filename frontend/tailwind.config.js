module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#F5D47E",
        "brand-secondary": "#50483E",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}