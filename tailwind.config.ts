import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#F2F2F2',
        black: '#0D0D0D',
        grey: '#BFBFBF',
        whiteGreen: '#DEE8D2',
        shamrockGreen: '#0FA068',
        darkGreen: '#043826',
      },
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      xs: '450px',
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
