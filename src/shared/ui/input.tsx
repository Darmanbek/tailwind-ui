import { forwardRef, type DetailedHTMLProps, type  InputHTMLAttributes } from "react"

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	name?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, ...props }, ref) => {
		return (
			<input
				id={name}
				name={name}
				autoComplete={name}
				className={
					"block w-full rounded-md bg-background px-3 py-1.5 text-base text-foreground outline outline-1 -outline-offset-1 outline-border placeholder:text-placeholder hover:outline-border-hover focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
				}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }
