import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lexend: 'Lexend',
        'lexend-deca': 'Lexend Deca',
        'space-grotesk': 'Space Grotesk',
        inter: 'Inter',
      },
      fontSize: {
        '8px': ['8px', '10px'],
        '10px': ['10px', '14px'],
      },
    },
  },
  plugins: [],
}
export default config
