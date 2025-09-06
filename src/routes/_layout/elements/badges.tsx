import { createFileRoute } from "@tanstack/react-router"
import { Badge, Card } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/badges")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Badge>Badge</Badge>
					<Badge color={"red"}>Badge</Badge>
					<Badge color={"yellow"}>Badge</Badge>
					<Badge color={"green"}>Badge</Badge>
					<Badge color={"blue"}>Badge</Badge>
					<Badge color={"indigo"}>Badge</Badge>
					<Badge color={"purple"}>Badge</Badge>
					<Badge color={"pink"}>Badge</Badge>
				</Stack>
			</Card>
		</>
	)
}
