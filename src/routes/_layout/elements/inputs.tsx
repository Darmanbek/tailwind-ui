import { createFileRoute } from "@tanstack/react-router"
import { Card, Input } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/inputs")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Input className={"max-w-80"} placeholder={"input..."} />
				</Stack>
			</Card>
		</>
	)
}
