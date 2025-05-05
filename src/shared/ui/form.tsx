import { forwardRef, type DetailedHTMLProps, type FormHTMLAttributes } from "react"
import { twx } from "src/shared/lib"

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	name?: string
}

const Form = forwardRef<HTMLFormElement, FormProps>(
	({ className, ...props }, ref) => {
		return (
			<form
				action={"#"}
				method={"POST"}
				className={twx("space-y-6", className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Form.displayName = "Form"

export { Form }
