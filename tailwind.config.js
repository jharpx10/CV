module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#CAF9BC',
        secondary: '#9611DE',
        secondaryHover: '#850fc5',
        terciary: '#F98C18',
        black: '#1B1F4B',
        gray: '#EBEBEB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
