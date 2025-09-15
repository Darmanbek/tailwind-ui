import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { createFileRoute } from "@tanstack/react-router"
import { Button, ButtonIcon } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/buttons")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Primary buttons"}
				color={"white"}
			>
				<Stack>
					<Button size={"xs"}>Button XS</Button>
					<Button size={"sm"}>Button SM</Button>
					<Button size={"md"}>Button MD</Button>
					<Button size={"lg"}>Button LG</Button>
					<Button size={"xl"}>Button XL</Button>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Secondary buttons"}
				color={"white"}
			>
				<Stack>
					<Button
						variant={"secondary"}
						size={"xs"}
					>
						Button XS
					</Button>
					<Button
						variant={"secondary"}
						size={"sm"}
					>
						Button SM
					</Button>
					<Button
						variant={"secondary"}
						size={"md"}
					>
						Button MD
					</Button>
					<Button
						variant={"secondary"}
						size={"lg"}
					>
						Button LG
					</Button>
					<Button
						variant={"secondary"}
						size={"xl"}
					>
						Button XL
					</Button>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Soft buttons"}
				color={"white"}
			>
				<Stack>
					<Button
						variant={"soft"}
						size={"xs"}
					>
						Button XS
					</Button>
					<Button
						variant={"soft"}
						size={"sm"}
					>
						Button SM
					</Button>
					<Button
						variant={"soft"}
						size={"md"}
					>
						Button MD
					</Button>
					<Button
						variant={"soft"}
						size={"lg"}
					>
						Button LG
					</Button>
					<Button
						variant={"soft"}
						size={"xl"}
					>
						Button XL
					</Button>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Buttons with leading icon"}
				color={"white"}
			>
				<Stack size={"sm"}>
					<Button size={"xs"}>
						<ButtonIcon
							icon={CheckCircleIcon}
							variant={"leading"}
							size={"xs"}
						/>
						Button XS
					</Button>
					<Button size={"sm"}>
						<ButtonIcon
							icon={CheckCircleIcon}
							variant={"leading"}
							size={"sm"}
						/>
						Button SM
					</Button>
					<Button size={"md"}>
						<ButtonIcon
							icon={CheckCircleIcon}
							variant={"leading"}
							size={"md"}
						/>
						Button MD
					</Button>
					<Button size={"lg"}>
						<ButtonIcon
							icon={CheckCircleIcon}
							variant={"leading"}
							size={"lg"}
						/>
						Button LG
					</Button>
					<Button size={"xl"}>
						<ButtonIcon
							loading={true}
							icon={CheckCircleIcon}
							variant={"leading"}
							size={"xl"}
						/>
						Button XL
					</Button>
				</Stack>
			</ResizeContainer>
		</>
	)
}
