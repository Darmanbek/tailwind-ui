import { Link, useLocation } from "@tanstack/react-router"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { twx } from "src/shared/lib"

const Sidebar: FC = () => {
	const { pathname } = useLocation()

	const menuItems = useMemo(() => {
		const currentPathname = pathname.split("/").slice(0, 2).join("/")
		return (
			menuData.find((item) => item.href === currentPathname)?.children || []
		)
	}, [pathname])

	return (
		<>
			<nav className={"border-l w-64 border-r p-6 min-h-full"}>
				<div className={"flex flex-col space-y-1 w-full"}>
					{menuItems.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							aria-current={pathname === item.href ? "page" : undefined}
							className={twx(
								pathname === item.href
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
