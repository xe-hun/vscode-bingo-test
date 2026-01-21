// tailwind.config.js for Eco Leafy Green theme
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'leaf-green': {
          DEFAULT: '#4CAF50', // main leafy green
          dark: '#357a38',   // deep moss
          light: '#81c784',  // fern
        },
        'moss': '#a3b18a',
        'fern': '#6a994e',
        'bark': '#7c6f57',
        'sunlight': '#ffe066',
        'dew': '#f4f9f4',
      },
      fontFamily: {
        leafy: ['Quicksand', 'Nunito', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        leafy: '0 4px 24px 0 rgba(76, 175, 80, 0.15)',
        moss: '0 2px 8px 0 rgba(163, 177, 138, 0.12)',
      },
      backgroundImage: {
        'leafy-gradient': 'linear-gradient(135deg, #e9f5db 0%, #b5c99a 100%)',
        'moss-gradient': 'linear-gradient(135deg, #a3b18a 0%, #6a994e 100%)',
      },
      borderRadius: {
        leafy: '1.5rem',
      },
      keyframes: {
        breeze: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        confetti: {
          '0%': { opacity: 0, transform: 'translateY(-20px) scale(0.8)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        breeze: 'breeze 2s ease-in-out infinite',
        confetti: 'confetti 0.8s ease-out',
      },
    },
  },
  plugins: [],
};
