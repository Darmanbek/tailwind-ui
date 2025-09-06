import { DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/24/outline"
import { useLocation } from "@tanstack/react-router"
import { type FC } from "react"
import { menuData } from "src/shared/data"
import { twx } from "src/shared/lib"

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}

const userNavigation = [
	{ name: "Your Profile", href: "/profile" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
]

const HeaderMenuPanel: FC = () => {
	const { pathname } = useLocation()

	return (
		<>
			<DisclosurePanel className={"md:hidden"}>
				<div className={"space-y-1 pb-3 pt-2"}>
					{menuData.map((item) => (
						<DisclosureButton
							key={item.name}
							as={"a"}
							href={item.href}
							aria-current={pathname.startsWith(item.href) ? "page" : undefined}
							className={twx(
								pathname.startsWith(item.href)
									? "bg-indigo-50 border-indigo-500 text-indigo-500"
									: "text-gray-500 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
								"block border-l-4 border-solid px-3 py-2 text-base font-medium"
							)}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
				<div className={"border-t border-gray-200 pb-3 pt-4"}>
					<div className={"flex items-center px-5"}>
						<div className={"shrink-0"}>
							<img
								alt={""}
								src={user.imageUrl}
								className={"size-10 rounded-full"}
							/>
						</div>
						<div className={"ml-3"}>
							<div className={"text-base/5 font-medium text-gray-800"}>
								{user.name}
							</div>
							<div className={"text-sm font-medium text-gray-500"}>
								{user.email}
							</div>
						</div>
						<button
							type={"button"}
							className={
								"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
							}
						>
							<span className={"absolute -inset-1.5"} />
							<span className={"sr-only"}>View notifications</span>
							<BellIcon aria-hidden={"true"} className={"size-6"} />
						</button>
					</div>
					<div className={"mt-3 space-y-1"}>
						{userNavigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as={"a"}
								href={item.href}
								className={
									"block px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-700"
								}
							>
								{item.name}
							</DisclosureButton>
						))}
					</div>
				</div>
			</DisclosurePanel>
		</>
	)
}

export { HeaderMenuPanel }
