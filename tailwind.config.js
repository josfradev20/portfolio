/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        fuchsia: [
          '0 20px 19px rgb(91 33 182 / 0.25)',
          '0 10px 18px rgb(91 33 182 / 0.24)'
        ]
      }
    }
  },
  plugins: []
}
