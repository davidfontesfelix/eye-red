/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#151515',
      },
      screens: {
        phoneSm: { max: '375px' },
        phone: { max: '480px' },
        tablet: { max: '769px', min: '481px' },
        laptop: { max: '1280px', min: '770px' },
        largerDesktop: { min: '1281px' },
      },
    },
  },
  plugins: [],
}
