/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:       '#f7a8c4',
          'pink-light': '#fbc8da',
          'pink-pale':  '#fde8f1',
          'pink-deep':  '#e8739b',
          yellow:     '#ffd97d',
          'yellow-light': '#ffe8a3',
          'yellow-pale':  '#fff6dc',
          'yellow-deep':  '#f5c535',
          cream:      '#fdf9f5',
          charcoal:   '#18141a',
          charcoal2:  '#2d2030',
          slate:      '#5a4a58',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg, #f7a8c4 0%, #ffd97d 100%)',
        'brand-grad-r': 'linear-gradient(135deg, #ffd97d 0%, #f7a8c4 100%)',
      },
    },
  },
  plugins: [],
};
