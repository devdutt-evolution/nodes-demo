/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: `rgb(var(--color-primary))`,
        background: `rgb(var(--color-background))`,
      },
    },
  },
  plugins: [],
};
