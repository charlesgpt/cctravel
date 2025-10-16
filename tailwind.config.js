/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f2ad0d",
        "secondary": "#ffd700",
        "accent": "#ff6b35",
        "background-light": "#f8f7f5",
        "background-dark": "#0a0a0a",
        "surface-light": "#ffffff",
        "surface-dark": "#1a1a1a",
        "muted-light": "#6b7280",
        "muted-dark": "#9ca3af",
        "text-light": "#1f2937",
        "text-dark": "#f3f4f6",
        "glass": "rgba(255, 255, 255, 0.1)"
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "body": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "full": "9999px"
      },
      boxShadow: {
        'gold-glow': '0 0 30px 10px rgba(242, 173, 13, 0.3)',
        'gold-glow-lg': '0 0 50px 15px rgba(242, 173, 13, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(242, 173, 13, 0.2)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'pulse-glow': 'glow-pulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { filter: 'drop-shadow(0 0 5px rgba(242, 173, 13, 0.5))' },
          'to': { filter: 'drop-shadow(0 0 20px rgba(242, 173, 13, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f2ad0d 0%, #ffd700 50%, #f2ad0d 100%)',
      }
    },
  },
  plugins: [],
}
