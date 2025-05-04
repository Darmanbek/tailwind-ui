import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			target: "react",
			quoteStyle: "double",
			semicolons: false,
			autoCodeSplitting: true
		}),
		react()
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src")
		}
	}
})
