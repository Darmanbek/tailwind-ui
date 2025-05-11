import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

export interface ContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data?: unknown
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full",
					className
				)}
				{...props}
			/>
		)
	}
)
Container.displayName = "Container"

export { Container }
