module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
      backgroundImage: {
        heroText: "url('/src/assets/img/accaro.svg')",
        blob: "url('/src/assets/img/blob.svg')",
      },
      content: {
        arrow: "url('/src/assets/img/arrow.svg')",
        rope: "url('/src/assets/img/rope.svg')",
        pattern: "url('/src/assets/img/pattern.svg')",
        ornament: "url('/src/assets/img/ornament.svg')",
      },
      colors: {
        primary: '#161515',
        accent: {
          DEFAULT: '#FD5956',
          hover: '#EB4441',
        },
        grey: '#5F5F5F',
        body: '#FFFEFD',
      },
    },
  },
  plugins: [],
};
