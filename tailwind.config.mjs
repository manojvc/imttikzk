import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Navy blue – primary brand colour (from logo)
        brand: {
          50:  '#eef0f8',
          100: '#d4d9f0',
          200: '#a9b3e1',
          300: '#7f8ed2',
          400: '#5468c3',
          500: '#3952b4',
          600: '#2d44a0',
          700: '#1b2878',   // ← primary navy
          800: '#151e5e',
          900: '#0e1444',
          950: '#080b2a',
        },
        // Gold / yellow – accent colour (from logo)
        gold: {
          300: '#fff59d',
          400: '#ffe566',
          500: '#ffd700',   // ← primary yellow
          600: '#e5b800',
          700: '#c4961a',   // ← dark gold (swoosh)
          800: '#a07a14',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'float':       'float 4s ease-in-out infinite',
        'float-slow':  'float 6s ease-in-out infinite',
        'float-mid':   'float 5s ease-in-out infinite 1s',
        'pulse-wa':    'pulseWa 2s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.7s ease both',
        'slide-right': 'slideRight 0.7s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        pulseWa: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' },
          '70%':     { boxShadow: '0 0 0 12px rgba(37,211,102,0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [typography],
};
