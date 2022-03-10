module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				"Poppins": ["Poppins", "sans-serif"],
			},
			colors: {
				"primary": "var(--first-color)",
				"primary-alt": "var(--first-color-alt)",
				"primary-light": "var(--first-color-light)",
				"secondary": "var(--second-color)",
				"title": "var(--title-color)",
				"text": "var(--text-color)",
				"text-light": "var(--text-color-light)",
				"input": "var(--input-color)",
				"body": "var(--body-color)",
				
				"secondary-dark": "var(--second-color-dark)",
				"title-dark": "var(--title-color-dark)",
				"text-dark": "var(--text-color-dark)",
				"input-dark": "var(--input-color-dark)",
				"body-dark": "var(--body-color-dark)"
			},
			gridTemplateColumns: {
				"home-social": "max-content",
				"home-content": ".5fr 3fr",
			},
			gridColumn: {
				"span-1/3": "1/3",
			},
			fontSize: {
				'tiny': '.813rem',
				'xl': '1.2rem',
			},
			screens: {
				"xs": {"max": "350px"},
			}
		},
	},
	plugins: [],
}