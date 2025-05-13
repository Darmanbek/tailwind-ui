import { createFileRoute } from "@tanstack/react-router"
import { ComponentsPage } from "src/pages/components"

export const Route = createFileRoute("/_layout/components/")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ComponentsPage />
		</>
	)
}
