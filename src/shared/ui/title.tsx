import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type DetailedHTMLProps, type HTMLAttributes } from "react"

const titleVariants = cva("font-bold tracking-tight text-foreground", {
	variants: {
		level: {
			h1: "text-3xl",
			h2: "text-2xl",
			h3: "text-xl",
			h4: "text-lg",
			h5: "text-md",
			h6: "text-sm"
		}
	},
	defaultVariants: {
		level: "h1"
	}
})

export interface TitleProps
	extends DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>,
		VariantProps<typeof titleVariants> {}

const Title = forwardRef<HTMLDivElement, TitleProps>(
	({ level, className, ...props }, ref) => {
		const Component = level || "h1"
		return (
			<Component
				ref={ref}
				className={titleVariants({ level, className })}
				{...props}
			/>
		)
	}
)
Title.displayName = "Title"

export { Title }
