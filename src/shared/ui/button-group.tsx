import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { twx } from "src/shared/lib"

export interface ButtonGroupProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title?: string
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"group isolate inline-flex rounded-md shadow-sm [&>button]:rounded-none [&_button:first-child]:rounded-l-md [&_button:last-child]:rounded-r-md",
					className
				)}
				{...props}
			/>
		)
	}
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
