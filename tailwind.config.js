/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FFA500',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        cyber: {
          green: '#00ff00',
          blue: '#00ffff',
          pink: '#ff00ff',
          yellow: '#ffff00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 0.8s ease-out 0.4s both',
        'fade-in-delay-3': 'fadeIn 0.8s ease-out 0.6s both',
        'fade-in-delay-4': 'fadeIn 0.8s ease-out 0.8s both',
        'pulse': 'pulse 2s infinite',
        'bounce': 'bounce 1s infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'matrix': 'matrix 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-5px,0)' },
          '70%': { transform: 'translate3d(0,-3px,0)' },
          '90%': { transform: 'translate3d(0,-1px,0)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        matrix: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(100px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 5px #FFA500, 0 0 10px #FFA500, 0 0 15px #FFA500',
        'neon-strong': '0 0 10px #FFA500, 0 0 20px #FFA500, 0 0 30px #FFA500',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(circle, rgba(255,165,0,0.3) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
};