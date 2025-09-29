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
					"isolate inline-flex rounded-md shadow-xs *:not-first:not-last:rounded-none *:first:rounded-r-none *:last:rounded-l-none",
					className
				)}
				data-slot={"button-group"}
				{...props}
			/>
		)
	}
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
