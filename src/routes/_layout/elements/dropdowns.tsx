import { createFileRoute } from "@tanstack/react-router"
import { Card, Dropdown } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/dropdowns")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card className={"min-h-96"}>
				<Stack>
					<Dropdown />
				</Stack>
			</Card>
		</>
	)
}
