module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
			},
			gridTemplateColumns: {
				'home-social': 'max-content',
				'home-content': '.5fr 3fr',
			},
			gridColumn: {
				'span-1/3': '1/3',
			}
		},
	},
	plugins: [],
}