import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "src/routeTree.gen"
import { NotFound } from "src/shared/layout"

// Create a new router instance
export const router = createRouter({
	routeTree,
	context: {},
	defaultNotFoundComponent: NotFound
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
