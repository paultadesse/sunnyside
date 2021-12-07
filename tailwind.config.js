module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        myyellow: '#fad400',
        desaturatedcyan: '#25564b',
        darkblue: '#19536b',
        moderatecyan: '#8bd6d2',
        desaturatedblue: '#23303e',
        grayishblue: '#5a636c',
        softred: '#fe7867'
      }
    },

    fontFamily:{
      barlow: ["Barlow"],
      fraunces: ["Fraunces"],
      readexpro: ["Readex Pro"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
