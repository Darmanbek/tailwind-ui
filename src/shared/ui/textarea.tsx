import {
	type DetailedHTMLProps,
	forwardRef,
	type TextareaHTMLAttributes
} from "react"
import { twx } from "src/shared/lib"

export interface TextareaProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	name?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={
					"outline " +
					twx(
						"block w-full max-w-80 min-h-9 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
						className
					)
				}
				{...props}
			/>
		)
	}
)
Textarea.displayName = "Textarea"

export { Textarea }
