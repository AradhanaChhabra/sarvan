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

			backgroundColor: {
				painting: "rgba(243, 189, 0, 1)",

				video: "rgba(0, 228, 243, 1)",

				sculpture: "rgba(5, 243, 0, 1)",

				drawing: "rgba(243, 0, 0, 1)",
			},

			borderRadius: {
				large: "0.625rem",
			},

			borderColor: {
				"light-gray": "rgba(0, 0, 0, 0.35)",
			},

			borderWidth: {
				thin: "0.5px",
			},

			fontSize: {
				"extra-small": [
					"0.5rem",
					{
						lineHeight: "0.6rem",
						fontWeight: "500",
					},
				],
				regular: [
					"11px",
					{
						lineHeight: "13.2px",
						fontWeight: "400",
					},
				],

				"regular-bold": [
					"0.875rem",
					{
						lineHeight: "1.05rem",
						fontWeight: "400",
					},
				],
			},
		},
	},
	plugins: [],
};
