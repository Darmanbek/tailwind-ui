import { createFileRoute } from "@tanstack/react-router"
import {
	Card,
	Dropdown,
	DropdownButton,
	DropdownMenuItem,
	DropdownMenuItems,
} from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/dropdowns")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card className={"min-h-96"}>
				<Stack>
					<Dropdown>
						<div>
							<DropdownButton>Option</DropdownButton>
						</div>
						<DropdownMenuItems>
							<div className={"py-1"}>
								<DropdownMenuItem href={"#"}>Account settings</DropdownMenuItem>
								<DropdownMenuItem href={"#"}>Support</DropdownMenuItem>
								<DropdownMenuItem href={"#"}>License</DropdownMenuItem>
							</div>
						</DropdownMenuItems>
					</Dropdown>
				</Stack>
			</Card>
		</>
	)
}
