import { Link, useLocation } from "@tanstack/react-router"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { twx } from "src/shared/lib"
import { Aside } from "src/shared/ui"

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
			<Aside
				className={
					"sticky left-0 top-[calc(4rem+1px)] h-[calc(100vh-4rem-1px)]"
				}
			>
				<div className={"flex flex-col space-y-1 w-full"}>
					{menuItems.map(({ Icon, ...item }) => (
						<Link
							key={item.name}
							to={item.href}
							aria-current={pathname === item.href ? "page" : undefined}
							className={twx(
								"text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold",
								{
									"px-3": !Icon,
									"text-indigo-600 bg-indigo-50": pathname === item.href,
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
										"ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs leading-5 font-medium whitespace-nowrap text-gray-600 ring-1 ring-gray-200 ring-inset"
									}
								>
									{item.extra}
								</span>
							)}
						</Link>
					))}
				</div>
			</Aside>
		</>
	)
}

export { Sidebar }
