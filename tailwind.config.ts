import { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#213656',
          600: '#3a7088',
          900: '#213656',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#ebf0f4',
          500: '#6B7280',
          600: '#4b5565',
          700: '#0d121c',
        },
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
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
