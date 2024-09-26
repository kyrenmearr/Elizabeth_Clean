/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid', //look for any liquid file in the layout folder
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

