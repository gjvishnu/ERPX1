import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary : '#4D3DF6',
        secondary: '#dad8ff',
        textSec : '#847eff',
        secBG : '#E6E6FE'
        // Adjust this to your desired purple shade
          // Example secondary color (light gray)
      },
    },
  },
  plugins: [],
} satisfies Config

