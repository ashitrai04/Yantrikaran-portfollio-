/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06070b',
        carbon: '#0d0f16',
        steel: '#161a25',
        cyan1: '#22d3ee',
        cyan2: '#06b6d4',
        amber1: '#fbbf24',
        emerald1: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(34,211,238,0.45)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
}
