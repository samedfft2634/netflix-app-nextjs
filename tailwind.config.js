/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"gray-dark-main": "#23242a",
				"gray-dark-second": "#28292d",
				"gray-light": "#d3dce6",
				"red-main": "#ff4b45",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
