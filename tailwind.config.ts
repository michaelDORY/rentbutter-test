import { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#71CFEB',
          50: '#E6F6FC',
          100: '#B8EAF5',
          900: '#1A8CB3',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
      },
      fontFamily: {
        sans: ['Kumbh', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        app: '12px',
      },
      boxShadow: {
        subtle: '0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      transitionTimingFunction: {
        ice: 'cubic-bezier(0.2, 0.6, 0.35, 1)',
      },
    },
  },
} as Config;
