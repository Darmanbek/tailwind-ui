import type { FC, PropsWithChildren } from "react"
import { twx } from "src/shared/lib"

interface StackProps {
	className?: string
	size?: "xs" | "sm" | "md" | "lg"
}

const Stack: FC<PropsWithChildren<StackProps>> = ({
	children,
	className,
	size = "lg",
}) => {
	return (
		<>
			<div
				className={twx(
					"flex flex-wrap justify-center items-center",
					{
						"gap-4": size === "xs",
						"gap-6": size === "sm",
						"gap-8": size === "md",
						"gap-10": size === "lg",
					},
					className
				)}
			>
				{children}
			</div>
		</>
	)
}

export { Stack }
