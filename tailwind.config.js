module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|from|to)-\[\#([0-9a-fA-F]{6})\]/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
