import { UserIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"
import { Avatar, Card } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

const url =
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const ComponentsAvatars: FC = () => {
	return (
		<>
			<Card>
				<Stack>
					<Avatar size={"xs"} src={url} />
					<Avatar size={"sm"} src={url} />
					<Avatar size={"md"} src={url} />
					<Avatar size={"lg"} src={url} />
					<Avatar size={"xl"} src={url} />
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Avatar size={"xs"} rounded={"square"} src={url} />
					<Avatar size={"sm"} rounded={"square"} src={url} />
					<Avatar size={"md"} rounded={"square"} src={url} />
					<Avatar size={"lg"} rounded={"square"} src={url} />
					<Avatar size={"xl"} rounded={"square"} src={url} />
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Avatar size={"xs"} icon={<UserIcon />} />
					<Avatar size={"sm"} icon={<UserIcon />} />
					<Avatar size={"md"} icon={<UserIcon />} />
					<Avatar size={"lg"} icon={<UserIcon />} />
					<Avatar size={"xl"} icon={<UserIcon />} />
				</Stack>
			</Card>
		</>
	)
}

export { ComponentsAvatars }
