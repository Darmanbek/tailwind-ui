import type { FC, ReactNode } from "react"
import { twx } from "src/shared/lib"

interface ResizeContainerProps {
	children?: ReactNode
	title?: string
	className?: string
	classNames?: {
		container?: string
		body?: string
	}
	edgeToEdge?: boolean
}

const ResizeContainer: FC<ResizeContainerProps> = ({
	title,
	className,
	children,
	classNames,
	edgeToEdge,
}) => {
	return (
		<>
			<div className={"flex items-center justify-between"}>
				<div className={"flex min-w-0 items-center"}>
					<h1
						className={" text-base/7 font-medium text-gray-950 dark:text-white"}
					>
						{title}
					</h1>
				</div>
				<div className={"ml-6 flex items-center"}></div>
			</div>
			<div
				className={twx(
					"w-full overflow-hidden rounded-lg ring-1 ring-gray-950/10 dark:ring-white/20 bg-gray-100 dark:bg-gray-900 mb-8",
					className
				)}
			>
				<div
					className={twx(
						"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
						{
							"px-0": edgeToEdge,
						},
						classNames?.container
					)}
				>
					<div className={twx("mx-auto max-w-2xl", classNames?.body)}>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export { ResizeContainer }
