import { PlusIcon } from "@heroicons/react/24/outline"
import { createFileRoute } from "@tanstack/react-router"
import { Button, Card, Divider } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/layout/dividers")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Divider className={"max-w-3xl w-full"} label={"Continue"} />
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						label={<PlusIcon className={"size-5"} />}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						label={"Continue"}
						position={"start"}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						level={"title"}
						label={"Projects"}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						level={"title"}
						label={"Projects"}
						position={"start"}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						position={"center"}
						extra={
							<Button
								variant={"secondary"}
								shape={"rounded"}
								trailingIcon={<PlusIcon />}
							>
								Button
							</Button>
						}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Divider
						className={"max-w-3xl w-full"}
						label={"Projects"}
						level={"title"}
						extra={
							<Button
								variant={"secondary"}
								shape={"rounded"}
								trailingIcon={<PlusIcon />}
							>
								Button
							</Button>
						}
					/>
				</Stack>
			</Card>
		</>
	)
}
