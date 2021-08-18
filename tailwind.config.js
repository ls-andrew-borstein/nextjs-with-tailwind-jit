module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    spacing: {
      0: "0",
      1: "0.5rem",
      2: "0.75rem",
      3: "1rem",
      4: "1.5rem",
      5: "2.25rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
