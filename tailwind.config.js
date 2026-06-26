/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c1e2a',
          dark: '#5a1520',
          light: '#9e3a4a',
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f9d2d6',
          300: '#f4adb4',
          400: '#ea7d88',
          500: '#d64d5e',
          600: '#b83245',
          700: '#7c1e2a',
          800: '#5a1520',
          900: '#3d0f17',
        },
        accent: {
          DEFAULT: '#d4a843',
          dark: '#b8922f',
          light: '#e4c470',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}