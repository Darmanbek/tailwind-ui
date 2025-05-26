import { createFileRoute } from "@tanstack/react-router"
import { Card, Switch } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/switchs")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Switch />
				</Stack>
			</Card>
		</>
	)
}
