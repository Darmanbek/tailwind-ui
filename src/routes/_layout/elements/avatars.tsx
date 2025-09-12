import { createFileRoute } from "@tanstack/react-router"
import {
	Avatar,
	AvatarGroup,
	AvatarLink,
	AvatarMeta,
	Notification,
} from "src/shared/ui"
import { UserIcon } from "src/shared/ui/icons"
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
				className={"dark"}
			>
				<Stack>
					<AvatarGroup>
						{Array.from({ length: 4 }, (_v, index) => (
							<Avatar
								src={url}
								key={index}
								size={"xs"}
								group={true}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<Avatar
								src={url}
								key={index}
								size={"sm"}
								group={true}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<Avatar
								src={url}
								key={index}
								size={"md"}
								group={true}
							/>
						))}
					</AvatarGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars"}
				color={"white"}
				className={"dark"}
			>
				<Stack>
					{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
						<Avatar
							key={size}
							size={size}
							src={url}
							alt={""}
						/>
					))}
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars"}
				color={"white"}
			>
				<Stack>
					{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
						<Avatar
							key={size}
							size={size}
							src={url}
							alt={""}
							square={true}
						/>
					))}
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with top notification"}
				className={"dark"}
				color={"white"}
			>
				<Stack>
					<Notification size={"xs"}>
						<Avatar
							size={"xs"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"sm"}
						color={"red"}
					>
						<Avatar
							size={"sm"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"md"}
						color={"green"}
					>
						<Avatar
							size={"md"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"lg"}
						color={"default"}
					>
						<Avatar
							size={"lg"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xl"}
						color={"red"}
					>
						<Avatar
							size={"xl"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xxl"}
						color={"green"}
					>
						<Avatar
							size={"xxl"}
							src={url}
							alt={""}
						/>
					</Notification>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars with top notification"}
				color={"white"}
			>
				<Stack>
					<Notification
						size={"xs"}
						square={true}
					>
						<Avatar
							size={"xs"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"sm"}
						square={true}
						color={"red"}
					>
						<Avatar
							size={"sm"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"md"}
						square={true}
						color={"green"}
					>
						<Avatar
							size={"md"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"lg"}
						square={true}
						color={"default"}
					>
						<Avatar
							size={"lg"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xl"}
						square={true}
						color={"red"}
					>
						<Avatar
							size={"xl"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xxl"}
						square={true}
						color={"green"}
					>
						<Avatar
							size={"xxl"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with bottom notification"}
				className={"dark"}
				color={"white"}
			>
				<Stack>
					<Notification
						size={"xs"}
						position={"bottom"}
					>
						<Avatar
							size={"xs"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"sm"}
						color={"red"}
						position={"bottom"}
					>
						<Avatar
							size={"sm"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"md"}
						color={"green"}
						position={"bottom"}
					>
						<Avatar
							size={"md"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"lg"}
						color={"default"}
						position={"bottom"}
					>
						<Avatar
							size={"lg"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xl"}
						color={"red"}
						position={"bottom"}
					>
						<Avatar
							size={"xl"}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xxl"}
						color={"green"}
						position={"bottom"}
					>
						<Avatar
							size={"xxl"}
							src={url}
							alt={""}
						/>
					</Notification>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars with bottom notification"}
				color={"white"}
			>
				<Stack>
					<Notification
						size={"xs"}
						square={true}
						position={"bottom"}
					>
						<Avatar
							size={"xs"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"sm"}
						square={true}
						color={"red"}
						position={"bottom"}
					>
						<Avatar
							size={"sm"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"md"}
						square={true}
						color={"green"}
						position={"bottom"}
					>
						<Avatar
							size={"md"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"lg"}
						square={true}
						color={"default"}
						position={"bottom"}
					>
						<Avatar
							size={"lg"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xl"}
						square={true}
						color={"red"}
						position={"bottom"}
					>
						<Avatar
							size={"xl"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
					{/* - - - */}
					<Notification
						size={"xxl"}
						square={true}
						color={"green"}
						position={"bottom"}
					>
						<Avatar
							size={"xxl"}
							square={true}
							src={url}
							alt={""}
						/>
					</Notification>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder icon"}
				color={"white"}
				className={"dark"}
			>
				<Stack>
					{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
						<Avatar
							key={size}
							size={size}
							icon={<UserIcon className={"size-full"} />}
						/>
					))}
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder initials"}
				color={"white"}
			>
				<Stack>
					{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
						<Avatar
							key={size}
							size={size}
							initials={"TW"}
						/>
					))}
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Avatar group stacked top to bottom"}
				color={"white"}
			>
				<Stack>
					<AvatarGroup isolate={true}>
						{([1, 2, 3, 4] as const).map((index) => (
							<Avatar
								src={url}
								alt={""}
								key={index}
								group={true}
								isolate={true}
								level={index}
								size={"xs"}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup isolate={true}>
						{([1, 2, 3, 4] as const).map((index) => (
							<Avatar
								src={url}
								alt={""}
								key={index}
								group={true}
								isolate={true}
								level={index}
								size={"sm"}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup isolate={true}>
						{([1, 2, 3, 4] as const).map((index) => (
							<Avatar
								src={url}
								alt={""}
								key={index}
								group={true}
								isolate={true}
								level={index}
								size={"md"}
							/>
						))}
					</AvatarGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With text"}
				color={"white"}
			>
				<Stack>
					<AvatarLink href={"#"}>
						<AvatarMeta
							avatar={
								<Avatar
									src={url}
									alt={""}
								/>
							}
							title={"Tom Cook"}
							description={"View profile"}
						/>
					</AvatarLink>
				</Stack>
			</ResizeContainer>
		</>
	)
}
