import { Link } from "@tanstack/react-router"
import { type FC } from "react"
import { twx } from "src/shared/lib"

const navigation = [
	{ name: "Buttons", href: "/buttons", current: true },
	{ name: "Cards", href: "/cards", current: false },
	{ name: "Navbars", href: "/navbars", current: false }
]

const Sidebar: FC = () => {
	return (
		<>
			<nav className={"border-l w-64 border-r p-6"}>
				<div className={"flex flex-col space-y-1 w-full"}>
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							aria-current={item.current ? "page" : undefined}
							className={twx(
								item.current
									? "bg-soft dark:bg-secondary-hover text-soft-foreground dark:text-foreground"
									: "text-foreground hover:bg-soft dark:hover:bg-secondary hover:text-soft-foreground dark:hover:text-secondary-foreground",
								"rounded-md px-3 py-2 text-sm font-medium"
							)}
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</>
	)
}

export { Sidebar }
