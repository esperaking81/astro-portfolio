/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      fontFamily: {
        script: ["'Dancing Script'", 'Verdana', 'sans-serif'],
        quicksand: ['Quicksand', 'Verdana', 'sans-serif'],
      }
    },
	},
	plugins: [],
}
