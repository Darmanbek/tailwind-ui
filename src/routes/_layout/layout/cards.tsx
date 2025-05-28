import { createFileRoute } from "@tanstack/react-router"
import { Card, Placeholder } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/cards")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Placeholder className={"h-64"} />
			</Card>
			<Card
				header={<Placeholder className={"h-16"} />}
				footer={<Placeholder className={"h-16"} />}
			>
				<Placeholder className={"h-64"} />
			</Card>
		</>
	)
}
