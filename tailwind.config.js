/** @type {import("tailwindcss").Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "var(--font-inter)"
			},
			colors: () => ({
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					hover: "var(--primary-hover)",
					foreground: "var(--primary-foreground)"
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					hover: "var(--secondary-hover)",
					foreground: "var(--secondary-foreground)"
				},
				soft: {
					DEFAULT: "var(--soft)",
					hover: "var(--soft-hover)",
					foreground: "var(--soft-foreground)"
				},
				border: {
					DEFAULT: "var(--border)",
					hover: "var(--border-hover)"
				},
				placeholder: "var(--placeholder)"
			})
		}
	},
	plugins: []
}
