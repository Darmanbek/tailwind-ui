export type MenuItem = {
	name: string
	href: string
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
				href: "/components/buttons"
			},
			{
				name: "Badges",
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
