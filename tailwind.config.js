/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark surfaces — navy, not green-tinted
        night:   '#080E1A',
        night1:  '#0D1526',
        night2:  '#111D33',
        night3:  '#192840',
        rim:     '#1E3050',
        rim2:    '#253A60',
        // Accent — precise sky blue
        sky:     '#38BDF8',
        skyD:    '#0EA5E9',
        skyX:    'rgba(56,189,248,0.10)',
        // Light surfaces
        surface: '#F8F9FC',
        surface1:'#EEF1F7',
        white:   '#FFFFFF',
        // Text on dark
        snow:    '#F1F5F9',
        snow2:   '#8FA3BF',
        snow3:   '#4A6480',
        // Text on light — high contrast
        ink:     '#0A0F1E',
        ink2:    '#1E2D45',
        slate:   '#3D5068',
        steel:   '#64748B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      boxShadow: {
        'card':  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'lift':  '0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)',
        'deep':  '0 16px 48px rgba(0,0,0,0.3)',
        'sky':   '0 4px 20px rgba(56,189,248,0.25)',
      },
    },
  },
  plugins: [],
}
