import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New warm, sensory-friendly color palette
        background: {
          primary: '#F0F7FF',    // soft sky blue
          secondary: '#F5FFF8',  // soft mint green
        },
        primary: {
          DEFAULT: '#4A90D9',    // calm medium blue
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#B3D9FF',
          300: '#80C0FF',
          400: '#4DA6FF',
          500: '#4A90D9',
          600: '#3A73B3',
          700: '#2A568C',
          800: '#1A3966',
          900: '#0A1C40',
        },
        secondary: {
          DEFAULT: '#5BBF8E',    // soft green
          50: '#E6F7F0',
          100: '#CCEFDF',
          200: '#99DFBF',
          300: '#66CF9F',
          400: '#5BBF8E',
          500: '#4A9971',
          600: '#3A7359',
          700: '#2A5440',
          800: '#1A3628',
          900: '#0A1710',
        },
        warm: {
          DEFAULT: '#F9A86C',    // gentle peach/orange
          50: '#FEF3E8',
          100: '#FDE7D1',
          200: '#FBCFA3',
          300: '#F9B775',
          400: '#F9A86C',
          500: '#F78C3D',
          600: '#E5700F',
          700: '#B7580C',
          800: '#894009',
          900: '#5B2806',
        },
        purple: {
          DEFAULT: '#9B8EC4',    // soft purple for Aura
          50: '#F3F1F9',
          100: '#E7E3F3',
          200: '#CFC7E7',
          300: '#B7ABDB',
          400: '#9B8EC4',
          500: '#7F72A8',
          600: '#635B86',
          700: '#474464',
          800: '#2B2D42',
          900: '#0F1620',
        },
        text: {
          primary: '#2D3748',    // dark charcoal
          secondary: '#718096',  // medium grey
        },
        border: {
          DEFAULT: '#E2EBF6',    // very light blue-grey
        },
        success: '#68D391',      // soft green
        highlight: '#FEF3C7',    // warm yellow
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '16px', // Minimum body text size
      },
      borderRadius: {
        'card': '20px',
        'button': '50px',
        'input': '12px',
        'game': '16px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(74, 144, 217, 0.08)',
        'card-hover': '0 8px 30px rgba(74, 144, 217, 0.15)',
        'navbar': '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
