import { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // TODO: use new color instead of "primary" colors in project
        primary: {
          DEFAULT: '#213656',
          600: '#3a7088',
          900: '#213656',
        },
        grey: {
          25: '#FCFCFD',
          50: '#F4F5F7',
          100: '#EBF0F4',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA4B2',
          500: '#697586',
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
        },
        black: '#0D121C',
        blue: {
          100: '#F0FAFE',
          200: '#B3E7FA',
          500: '#68CFF6',
          primary: '#68CFF6',
          700: '#3A7088',
        },
        ink: {
          100: '#E9EBEE',
          200: '#BCC3CC',
          500: '#647289',
          primary: '#213656',
          700: '#213656',
        },
        success: {
          50: '#EDFCF2',
          100: '#D3F8DF',
          500: '#16B364',
          700: '#087443',
        },
        warning: {
          50: '#FFFAEB',
          100: '#FEF0C7',
          500: '#F79009',
          700: '#B54708',
        },
        error: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          500: '#F04438',
          700: '#B42318',
        },
        'brand-accent': {
          yellow: '#FFC42C',
          orange: '#FF7C5D',
          green: '#50DEA2',
          red: '#FF5D5D',
        },
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      borderWidth: {
        1.5: '1.5px',
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
