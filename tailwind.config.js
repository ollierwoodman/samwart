/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"'],
        hw: ['"Zeyada"'],
      }
    },
  },
  safelist: [
    'absolute',
    'object-cover',
    'object-center',
    'w-full',
    'h-full',
    'transition',
    'ease-in-out',
    'duration-1000',
    'motion-reduce:transition-none',
    'transition-opacity',
    'opacity-0',
    'aria-[current=true]:opacity-100'
  ],
  plugins: [],
}