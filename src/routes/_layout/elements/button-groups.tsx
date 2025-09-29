import { createFileRoute } from "@tanstack/react-router"
import { Button, ButtonGroup } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/button-groups")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer color={"white"}>
				<Stack>
					<ButtonGroup>
						<Button>First</Button>
						<Button>Second</Button>
						<Button>Third</Button>
					</ButtonGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Stack>
					<ButtonGroup>
						<Button variant={"secondary"}>First</Button>
						<Button variant={"secondary"}>Second</Button>
						<Button variant={"secondary"}>Third</Button>
					</ButtonGroup>
				</Stack>
			</ResizeContainer>
		</>
	)
}
