/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#111827',
        'brand-surface': '#1F2937',
        'brand-red': '#EF4444',
        'brand-red-dark': '#DC2626',
        'brand-text': '#F9FAFB',
        'brand-text-secondary': '#9CA3AF',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
