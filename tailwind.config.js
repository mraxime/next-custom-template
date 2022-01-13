/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
			textColor: {
				primary: 'var(--color-text)',
			},
			backgroundColor: {
				primary: 'var(--color-background)',
			},
		},
	},
	plugins: [],
}
