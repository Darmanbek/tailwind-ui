import { Link, useLocation } from "@tanstack/react-router"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { twx } from "src/shared/lib"

const Sidebar: FC = () => {
	const { pathname } = useLocation()

	const menuItems = useMemo(
		() =>
			menuData.find((item) => pathname.startsWith(item.href))?.children || [],
		[pathname]
	)

	if (!menuItems.length) return null

	return (
		<>
			<nav className={"hidden md:block w-64 border-r p-6 min-h-full"}>
				<div className={"flex flex-col space-y-1 w-full"}>
					{menuItems.map(({ Icon, ...item }) => (
						<Link
							key={item.name}
							to={item.href}
							aria-current={pathname === item.href ? "page" : undefined}
							className={twx(
								"text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm font-semibold",
								{
									"px-3": !Icon,
									"text-indigo-600 bg-indigo-50": pathname === item.href
								}
							)}
						>
							{Icon && (
								<Icon
									className={
										"text-gray-400 hover:text-indigo-600 size-6 group-hover:text-indigo-500 group-aria-[current]:text-indigo-500"
									}
								/>
							)}{" "}
							{item.name}
							{item.extra && (
								<span
									className={
										"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium whitespace-nowrap color-gray-400 shadow oyv oyw"
									}
								>
									{item.extra}
								</span>
							)}
						</Link>
					))}
				</div>
			</nav>
		</>
	)
}

export { Sidebar }
