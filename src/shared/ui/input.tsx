import {
	type DetailedHTMLProps,
	forwardRef,
	type InputHTMLAttributes
} from "react"
import { twx } from "src/shared/lib"

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, className, ...props }, ref) => {
		return (
			<input
				id={name}
				name={name}
				autoComplete={name}
				className={
					"outline " +
					twx(
						"block w-full rounded-md bg-background px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-border placeholder:text-placeholder hover:outline-border-hover focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6",
						className
					)
				}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }
