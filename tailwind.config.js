/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,tsx,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				syne: [
					"Syne",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Oxygen",
					"Ubuntu",
					"Fira Sans",
					"Droid Sans",
					"Helvetica Neue",
					"sans-serif",
				],
			},

			borderRadius: {
				large: "0.625rem",
			},

			borderColor: {
				"light-gray": "rgba(0, 0, 0, 0.35)",
			},

			fontSize: {
				"extra-small": [
					"0.5rem",
					{
						lineHeight: "0.6rem",
						fontWeight: "500",
					},
				],
			},
		},
	},
	plugins: [],
};
