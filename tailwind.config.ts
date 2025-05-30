import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './animations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1921px',
    },
    extend: {
      maxWidth: {
        '9/10': '90%',
        '8/10': '80%',
      },
      colors: {
        green: {
          DEFAULT: '#4D7867',
          light: '#D6E3CF',
        },
        pink: {
          DEFAULT: '#F5B3A9',
          darker: '#F19384',
          light: '#FBE1DB',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat'],
      },
      keyframes: {
        heart: {
          '0%': {
            transform: 'scale(0.90)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.90)',
          },
        },
        'fade-in': {
          from: { opacity: '0', scale: '0.95' },
          to: { opacity: '1', scale: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        splash: {
          '40%': {
            background: '#4D7867',
            boxShadow:
              '0 -18px 0 -8px #4D7867, 16px -8px 0 -8px #4D7867, 16px 8px 0 -8px #4D7867, 0 18px 0 -8px #4D7867, -16px 8px 0 -8px #4D7867, -16px -8px 0 -8px #4D7867',
          },
          '100%': {
            background: '#4D7867',
            boxShadow:
              '0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent',
          },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
        splash: 'splash 0.6s ease forwards',
        'fade-in': 'fade-in 0.3s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
