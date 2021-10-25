module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F2',
          300: '#EEBBC3',
          900: '#D49DA5'
        },
        secondary: {
          50: '#464C6B',
          300: '#232946',
          900: '#0E111F'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
