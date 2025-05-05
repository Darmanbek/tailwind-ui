import { forwardRef, type DetailedHTMLProps, type  HTMLAttributes } from "react"
import { twx } from "src/shared/lib"

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	type?: "secondary" | "default"
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
	({className, type = "default", ...props}, ref) => {
		return (
			<p
				ref={ref}
				className={twx("text-sm", {
					"text-foreground": type === "default",
					"text-secondary-foreground": type === "secondary"
				}, className)}
				{...props}
			/>
		)
	}
)
Text.displayName = "Text"

export { Text }
