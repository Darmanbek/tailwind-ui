import { createFileRoute } from "@tanstack/react-router"
import { Input } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/inputs")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer color={"white"}>
				<Stack>
					<Input className={"max-w-80"} placeholder={"input..."} />
				</Stack>
			</ResizeContainer>
		</>
	)
}
