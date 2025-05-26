import { createFileRoute } from "@tanstack/react-router"
import { PagePreview } from "src/widgets/page-preview"

export const Route = createFileRoute("/_layout/elements/")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<PagePreview title={"Elements"} />
		</>
	)
}
