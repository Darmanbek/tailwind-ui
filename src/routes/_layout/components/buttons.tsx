import { createFileRoute } from "@tanstack/react-router"
import { ComponentsButtonsPage } from "src/pages/components-buttons"

export const Route = createFileRoute("/_layout/components/buttons")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ComponentsButtonsPage />
		</>
	)
}
