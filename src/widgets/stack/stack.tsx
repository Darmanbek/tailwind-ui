import type { FC, PropsWithChildren } from "react"
import { twx } from "src/shared/lib"

interface StackProps {
	className?: string
}

const Stack: FC<PropsWithChildren<StackProps>> = ({ children, className }) => {
	return (
		<>
			<div
				className={twx(
					"flex flex-wrap gap-10 justify-center items-center",
					className
				)}
			>
				{children}
			</div>
		</>
	)
}

export { Stack }
