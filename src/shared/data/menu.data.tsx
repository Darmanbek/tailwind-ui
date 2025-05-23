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
				name: "Buttons",
				Icon: Squares2X2Icon,
				href: "/components/buttons",
				extra: "11"
			},
			{
				name: "Badges",
				Icon: Squares2X2Icon,
				href: "/components/badges"
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
