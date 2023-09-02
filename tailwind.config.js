/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'Light Mode',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}','node_modules/preline/dist/*.js',],
  theme: {
    screens:{
      sm:'480px',
      mv:'393px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        slight: 'hsla(255, 9%, 9%, 1)',
        stuck: 'hsla(264, 8%, 16%, 1)',
        Lightblack: 'hsla(0, 0%, 0%, 1)',
        veryLightGray: ' hsla(265, 8%, 40%, 1)',
        yellowcolr:'hsla(54, 96%, 53%, 1)',
        icl:'hsla(54, 100%, 45%, 1)',
        bodycolor: 'hsla(350, 67%, 96%, 1)',
        Textlight:'hsla(0, 0%, 47%, 1)',
        demand:'hsla(265, 8%, 60%, 1)',
        gr1:'hsla(234, 100%, 13%, 1)',
        gr2:'hsla(346, 91%, 29%, 1)',
        gr3:'hsla(22, 100%, 54%, 1)',
        lighttxt:'hsla(0, 0%, 100%, 0.7)',
        sample1:'hsla(292, 49%, 79%, 1)',
        sample2:'hsla(0, 100%, 84%, 1)',
        sample3:'hsla(0, 0%, 88%, 1)',
      },
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

