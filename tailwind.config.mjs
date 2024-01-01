/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blue': '#17b3bb',
			'purple': '#3D2B8C',
			'pink': '#ff57bb',
			'yellow': '#ffc82c',
			'primary': '#d4d2d5',
			'background': '#0a141f',
			'black': '#000500'
		  },
		  extend: {
			spacing: {
			  '128': '32rem',
			  '144': '36rem',
			},
			borderRadius: {
			  '4xl': '2rem',
			}
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
