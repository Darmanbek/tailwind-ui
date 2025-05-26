import { createFileRoute } from "@tanstack/react-router"
import { ComponentsAvatarsPage } from "src/pages/components-avatars"

export const Route = createFileRoute("/_layout/elements/avatars")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ComponentsAvatarsPage />
		</>
	)
}
