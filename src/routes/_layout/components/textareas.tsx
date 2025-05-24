import { createFileRoute } from "@tanstack/react-router"
import { Card, Textarea } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/components/textareas")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Textarea />
				</Stack>
			</Card>
		</>
	)
}
