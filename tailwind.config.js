/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
import lineClamp from '@tailwindcss/line-clamp'; // Correctly import the line-clamp plugin

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        inherit: 'inherit',
      },
      fontFamily: {
        oswald: ['Oswald'],
        youtube: ['Roboto'],
      },
    },
  },
  plugins: [tailwindScrollbar, lineClamp], // Ensure both plugins are properly imported and added
};
