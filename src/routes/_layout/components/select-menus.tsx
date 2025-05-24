import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Card, SelectMenu } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/components/select-menus")({
	component: RouteComponent
})

const people = [
	{
		id: 1,
		name: "Wade Cooper",
		avatar:
			"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 2,
		name: "Arlene Mccoy",
		avatar:
			"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 3,
		name: "Devon Webb",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
	},
	{
		id: 4,
		name: "Tom Cook",
		avatar:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 5,
		name: "Tanya Fox",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 6,
		name: "Hellen Schmidt",
		avatar:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 7,
		name: "Caroline Schultz",
		avatar:
			"https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 8,
		name: "Mason Heaney",
		avatar:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 9,
		name: "Claudie Smitham",
		avatar:
			"https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	},
	{
		id: 10,
		name: "Emil Schaefer",
		avatar:
			"https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	}
]

function RouteComponent() {
	const [selected, setSelected] = useState(people[3])

	return (
		<>
			<Card className={"min-h-96"}>
				<Stack>
					<SelectMenu
						value={selected?.name}
						onChange={(value) => {
							const item = people.find((el) => `${el.id}` === value)
							if (!item) return
							setSelected(item)
						}}
						items={people.map((el) => ({
							value: `${el.id}`,
							label: el.name,
							avatar: el.avatar
						}))}
					/>
				</Stack>
			</Card>
		</>
	)
}
