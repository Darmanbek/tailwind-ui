import type { FC, PropsWithChildren } from "react"
import { twx } from "src/shared/lib"

interface MainContentProps {
	className?: string
}

const MainContent: FC<PropsWithChildren<MainContentProps>> = ({
	children,
	className
}) => {
	return (
		<>
			<main>
				<div
					className={twx(
						"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
						className
					)}
				>
					{children}
				</div>
			</main>
		</>
	)
}

export { MainContent }
