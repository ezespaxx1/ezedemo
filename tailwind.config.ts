import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1E8',
        champagne: '#DCCBB8',
        sage: '#5E6B57',
        cocoa: '#6A4E42',
        charcoal: '#2D2A28',
        gold: '#B9975B',
        blush: '#CFA7A0'
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        editorial: '0 14px 35px rgba(45, 42, 40, 0.12)'
      },
      backgroundImage: {
        'botanical-fade':
          'radial-gradient(circle at top right, rgba(185, 151, 91, 0.2), transparent 45%), radial-gradient(circle at bottom left, rgba(94, 107, 87, 0.14), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
