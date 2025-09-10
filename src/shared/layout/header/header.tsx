import { Disclosure } from "@headlessui/react"
import { type FC } from "react"
import { HeaderLeft } from "./header-left.tsx"
import { HeaderMenuButton } from "./header-menu-button.tsx"
import { HeaderMenuPanel } from "./header-menu-panel.tsx"
import { HeaderRight } from "./header-right.tsx"

const Header: FC = () => {
	return (
		<>
			<header
				className={
					"bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/20 sticky top-0 z-40"
				}
			>
				<Disclosure
					as={"nav"}
					className={"mx-auto"}
				>
					<div className={"flex h-16 items-center justify-between px-4"}>
						<HeaderLeft />
						<HeaderRight />
						<HeaderMenuButton />
					</div>
					<HeaderMenuPanel />
				</Disclosure>
			</header>
		</>
	)
}

export { Header }
