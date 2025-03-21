/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode with class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3ca5d2",
          50: "#f0f8fc",
          100: "#dceff7",
          200: "#b9dfef",
          300: "#84c6e4",
          400: "#4aa5d2",
          500: "#3ca5d2", // Primary color
          600: "#2277a2",
          700: "#1e6084",
          800: "#1d516e",
          900: "#1d435c",
          950: "#132b3b",
        },
        dark: {
          DEFAULT: "#050606",
          50: "#f3f4f4",
          100: "#e0e3e3",
          200: "#c2c8c8",
          300: "#9ca5a5",
          400: "#788383",
          500: "#5f6a6a",
          600: "#4c5454",
          700: "#404747",
          800: "#353b3b",
          900: "#050606", // Dark background
          950: "#050606",
        },
        text: {
          DEFAULT: "#d8dbda", // Dark mode text color
          muted: "#615e5f", // Dark mode muted text
          light: "#333333", // Light mode text color
          "light-muted": "#666666", // Light mode muted text
        },
        background: {
          dark: "#050606", // Dark mode background
          light: "#f9fafb", // Light mode background
        }
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'bounce-start': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-end': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        'bounce-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '80%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'bounce-in': 'bounce-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out',
        'fade-in-down': 'fade-in-down 0.7s ease-out',
        'fade-in-left': 'fade-in-left 0.7s ease-out',
        'fade-in-right': 'fade-in-right 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
