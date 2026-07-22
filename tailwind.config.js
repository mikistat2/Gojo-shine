/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E8F5F1',
          100: '#D2EBE4',
          200: '#A5D7C9',
          300: '#6FBBA7',
          400: '#3D9A83',
          500: '#1F7263',
          600: '#155C50',
          700: '#0F4C45',
          800: '#0B3B36',
          900: '#072A27',
        },
        gold: {
          300: '#E8CD84',
          400: '#DEBB60',
          500: '#D4A947',
          600: '#B98F33',
          700: '#94702A',
        },
        mint: '#E8F5F1',
      },
      fontFamily: {
        heading: ['Sora', 'Noto Sans Ethiopic', 'sans-serif'],
        body: ['Inter', 'Noto Sans Ethiopic', 'sans-serif'],
        amharic: ['Noto Sans Ethiopic', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 76, 69, 0.08), 0 8px 24px -4px rgba(15, 76, 69, 0.10)',
        lift: '0 4px 12px -2px rgba(15, 76, 69, 0.12), 0 16px 40px -8px rgba(15, 76, 69, 0.16)',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(340%) skewX(-12deg)' },
        },
        'sparkle-pop': {
          '0%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.14)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shine: 'shine 1.4s ease-in-out 0.5s 1 both',
        'sparkle-pop': 'sparkle-pop 1.6s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        kenburns: 'kenburns 14s ease-in-out infinite alternate',
        marquee: 'marquee 60s linear infinite',
      },
    },
  },
  plugins: [],
}
