import { FolderPlusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { createFileRoute } from "@tanstack/react-router"
import { Button, Card, Text, Title } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/feedback/empty-states")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<div className={"text-center"}>
						<FolderPlusIcon className={"mx-auto size-12 text-gray-400"} />
						<Title className={"mt-2 font-semibold"} level={"h6"}>
							No projects
						</Title>
						<Text type={"secondary"} className={"mt-1"}>
							Get started by creating a new project.
						</Text>
						<div className={"mt-6"}>
							<Button size={"lg"} trailingIcon={<PlusIcon />}>
								New Project
							</Button>
						</div>
					</div>
				</Stack>
			</Card>
		</>
	)
}
