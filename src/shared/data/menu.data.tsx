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
				href: "/components/button-groups",
				extra: "5"
			},
			{
				name: "Inputs",
				Icon: Squares2X2Icon,
				href: "/components/inputs",
				extra: "5"
			},
			{
				name: "TextAreas",
				Icon: Squares2X2Icon,
				href: "/components/textareas",
				extra: "1"
			},
			{
				name: "Selects",
				Icon: Squares2X2Icon,
				href: "/components/selects",
				extra: "1"
			},
			{
				name: "List Box",
				Icon: Squares2X2Icon,
				href: "/components/list-box",
				extra: "1"
			},

			{
				name: "Switchs",
				Icon: Squares2X2Icon,
				href: "/components/switchs",
				extra: "1"
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
