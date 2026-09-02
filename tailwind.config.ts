import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          dark: '#151515',
          charcoal: '#1E293B',
          amber: '#FFAC00',
          amberDark: '#E09600',
          terracotta: '#C85A32',
          terracottaDark: '#A8431F',
          linen: '#F0EEEB',
          sand: '#F5F5F4',
          sandLight: '#FBF9F5',
          slateMuted: '#888888',
          borderDark: '#262626',
          borderLight: '#E2E8F0',
          emerald: '#22C55E',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', '-apple-system', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        editorial: ['var(--font-instrument)', 'Instrument Serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        'card-light': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        glow: '0 0 25px rgba(255, 172, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
