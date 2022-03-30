module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1E1E1E',
        secondary: '#272727',
        tertiary: '#323232',
        buttonPrimary: '#3AC1C8',
        success: '#6AEEC5',
      },
      borderColor: {
        primary: '#3AC1C8',
      },
      textColor: {
        primary: '#3AC1C8',
        secondary: '#272727',
        tertiary: '#5D5D5D',
        tableText: '#C9C9C9',
        default: '#FFF',
      },
    },
  },
  plugins: [],
};
