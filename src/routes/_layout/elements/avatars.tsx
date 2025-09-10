import { UserCircleIcon } from "@heroicons/react/24/solid"
import { createFileRoute } from "@tanstack/react-router"
import { Avatar, AvatarGroup } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/avatars")({
	component: RouteComponent,
})

const url =
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Avatar group stacked bottom to top"}
				color={"white"}
			>
				<Stack>
					<AvatarGroup>
						<Avatar
							src={url}
							size={"xs"}
							group={true}
						/>
						<Avatar
							src={url}
							size={"xs"}
							group={true}
						/>
						<Avatar
							src={url}
							size={"xs"}
							group={true}
						/>
						<Avatar
							src={url}
							size={"xs"}
							group={true}
						/>
						<Avatar
							src={url}
							size={"xs"}
							group={true}
						/>
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						<Avatar
							size={"sm"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"sm"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"sm"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"sm"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"sm"}
							src={url}
							group={true}
						/>
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						<Avatar
							size={"md"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"md"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"md"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"md"}
							src={url}
							group={true}
						/>
						<Avatar
							size={"md"}
							src={url}
							group={true}
						/>
					</AvatarGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars"}
				color={"white"}
			>
				<Stack>
					<Avatar
						size={"xs"}
						src={url}
					/>
					<Avatar
						size={"sm"}
						src={url}
					/>
					<Avatar
						size={"md"}
						src={url}
					/>
					<Avatar
						size={"lg"}
						src={url}
					/>
					<Avatar
						size={"xl"}
						src={url}
					/>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars"}
				color={"white"}
			>
				<Stack>
					<Avatar
						size={"xs"}
						square={true}
						src={url}
					/>
					<Avatar
						size={"sm"}
						square={true}
						src={url}
					/>
					<Avatar
						size={"md"}
						square={true}
						src={url}
					/>
					<Avatar
						size={"lg"}
						square={true}
						src={url}
					/>
					<Avatar
						size={"xl"}
						square={true}
						src={url}
					/>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder icon"}
				color={"white"}
			>
				<Stack>
					<Avatar
						size={"xs"}
						icon={<UserCircleIcon />}
					/>
					<Avatar
						size={"sm"}
						icon={<UserCircleIcon />}
					/>
					<Avatar
						size={"md"}
						icon={<UserCircleIcon />}
					/>
					<Avatar
						size={"lg"}
						icon={<UserCircleIcon />}
					/>
					<Avatar
						size={"xl"}
						icon={<UserCircleIcon />}
					/>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder initials"}
				color={"white"}
			>
				<Stack>
					<Avatar
						size={"xs"}
						initials={"tw"}
					/>
					<Avatar
						size={"sm"}
						initials={"tw"}
					/>
					<Avatar
						size={"md"}
						initials={"tw"}
					/>
					<Avatar
						size={"lg"}
						initials={"tw"}
					/>
					<Avatar
						size={"xl"}
						initials={"tw"}
					/>
				</Stack>
			</ResizeContainer>
		</>
	)
}
