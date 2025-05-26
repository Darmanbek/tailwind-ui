import { createFileRoute } from "@tanstack/react-router"
import { PagePreview } from "src/widgets/page-preview"

export const Route = createFileRoute("/_layout/application-shells/")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<PagePreview title={"Application Shells"} />
		</>
	)
}
