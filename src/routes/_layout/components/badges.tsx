import { createFileRoute } from "@tanstack/react-router"
import { ComponentsBadgesPage } from "src/pages/components-badges"

export const Route = createFileRoute("/_layout/components/badges")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ComponentsBadgesPage />
		</>
	)
}
