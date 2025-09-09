import { PlusIcon } from "@heroicons/react/24/outline"
import { createFileRoute } from "@tanstack/react-router"
import { Button, Divider } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/dividers")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer className={"bg-white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={"Continue"}
				/>
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={<PlusIcon className={"size-5"} />}
				/>
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={"Continue"}
					position={"start"}
				/>
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
				<Divider
					className={"max-w-3xl w-full"}
					level={"title"}
					label={"Projects"}
				/>
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
				<Divider
					className={"max-w-3xl w-full"}
					level={"title"}
					label={"Projects"}
					position={"start"}
				/>
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
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
			</ResizeContainer>
			<ResizeContainer className={"bg-white"}>
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
			</ResizeContainer>
		</>
	)
}
