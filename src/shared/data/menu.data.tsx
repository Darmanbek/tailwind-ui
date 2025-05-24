import { Squares2X2Icon } from "@heroicons/react/24/outline"
import type { ReactNode } from "react"

export type MenuItem = {
	name: string
	Icon?: typeof Squares2X2Icon
	href: string
	extra?: ReactNode
}

export type MenuGroupItem = MenuItem & {
	children: MenuItem[]
}

export const menuData: MenuGroupItem[] = [
	{
		name: "Components",
		href: "/components",
		children: [
			{
				name: "Avatars",
				Icon: Squares2X2Icon,
				href: "/components/avatars",
				extra: "11"
			},
			{
				name: "Badges",
				Icon: Squares2X2Icon,
				href: "/components/badges",
				extra: "1"
			},
			{
				name: "Dropdowns",
				Icon: Squares2X2Icon,
				href: "/components/dropdowns",
				extra: "5"
			},
			{
				name: "Buttons",
				Icon: Squares2X2Icon,
				href: "/components/buttons",
				extra: "11"
			},
			{
				name: "Button Groups",
				Icon: Squares2X2Icon,
				href: "/components/buttons-groups",
				extra: "5"
			}
		]
	},
	{
		name: "Templates",
		href: "/templates",
		children: [
			{
				name: "Login",
				href: "/login"
			}
		]
	}
]
