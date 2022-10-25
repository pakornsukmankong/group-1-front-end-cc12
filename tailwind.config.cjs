/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			aspectRatio: {
				'149125/141668': '149125 / 141668',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
