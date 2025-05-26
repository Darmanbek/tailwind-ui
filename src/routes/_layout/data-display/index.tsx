import { createFileRoute } from "@tanstack/react-router"
import { PagePreview } from "src/widgets/page-preview"

export const Route = createFileRoute("/_layout/data-display/")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<PagePreview title={"Data Display"} />
		</>
	)
}
