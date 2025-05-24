import { createFileRoute } from "@tanstack/react-router"
import { Button, ButtonGroup, Card } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/components/button-groups")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<ButtonGroup>
						<Button>First</Button>
						<Button>Second</Button>
						<Button>Third</Button>
					</ButtonGroup>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<ButtonGroup>
						<Button variant={"secondary"}>First</Button>
						<Button variant={"secondary"}>Second</Button>
						<Button variant={"secondary"}>Third</Button>
					</ButtonGroup>
				</Stack>
			</Card>
		</>
	)
}
