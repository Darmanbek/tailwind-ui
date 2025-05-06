import { createFileRoute } from "@tanstack/react-router"
import { TemplatesPage } from "src/pages/templates"

export const Route = createFileRoute("/_layout/templates")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<TemplatesPage />
		</>
	)
}
