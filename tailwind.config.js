module.exports = {
  purge: [
  './_includes/**/*.html',
  './_layouts/**/*.html',
  './_posts/*.md',
  './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 2px 2px 0px rgba(0, 0, 0, 0.26)',
        focus: 'inset 2px 2px 0px rgba(0, 0, 0, 0.42)',
      },
      colors: {
        red: '#E31F23',
        'light-red': '#EE2B30',
        'dark-red':'#D61214',
        gray: {
          100: '#F4F4F4',
          200: '#D1D1D1',
          300: '#989898',
          400: '#818181',
          500: '#717171',
          600: '#e6e6e6',
          800: '#555555',
          900: '#191919',
        },
        blue: {
          100: '#0096cf',
          300: '#1387A1',
          400: '#0E8AA2',
        },
        green: {
          100: '#94CD42',
          200: '#95CD48',
          300: '#90CE52',          
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
