/** @type {import("tailwindcss").Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "var(--font-inter)",
				sans: [
					"InterVariable",
					...require("tailwindcss/defaultTheme").fontFamily.sans
				]
			},
			colors: {
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
			},
			keyframes: {
				enter: {
					from: {
						transform: "translateX(150%)"
					},
					to: {
						transform: "translateX(0)"
					}
				},
				leave: {
					from: {
						transform: "translateX(0)"
					},
					to: {
						transform: "translateX(150%)"
					}
				}
			},
			animation: {
				enter: "enter 0.2s ease-out",
				leave: "leave 0.15s ease-in forwards"
			}
		}
	},
	plugins: []
}
