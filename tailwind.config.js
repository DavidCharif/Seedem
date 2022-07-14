/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      lightGray: '#f0f1f6',
      primaryCyan: 'hsl(180, 66%, 49%)',
      primaryViolet: 'hsl(257, 27%, 26%)',
      secondaryRed: 'hsl(0, 87%, 67%)',
      neutralGray: 'hsl(0, 0%, 75%)',
      neutralGrayishViolet: 'hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet: 'hsl(260, 8%, 14%)',
      white: 'hsl(0, 0%, 100%)'
    }
  },
  plugins: []
}
