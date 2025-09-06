import { Link, useLocation } from "@tanstack/react-router"
import { type FC } from "react"
import { menuData } from "src/shared/data"
import { twx } from "src/shared/lib"
import { Logo } from "src/widgets/logo"

const HeaderLeft: FC = () => {
	const { pathname } = useLocation()

	return (
		<>
			<div className={"flex items-center md:items-stretch h-full"}>
				<Link to={"/"} className={"flex items-center"}>
					<Logo />
				</Link>
				<div className={"hidden md:block"}>
					<div className={"ml-10 flex items-stretch h-full space-x-4"}>
						{menuData.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								aria-current={
									pathname.startsWith(item.href) ? "page" : undefined
								}
								className={twx(
									pathname.startsWith(item.href)
										? "text-gray-900 border-indigo-500"
										: "text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700",
									"inline-flex items-center border-b-2 border-solid px-1 pt-1 text-sm font-medium"
								)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export { HeaderLeft }
