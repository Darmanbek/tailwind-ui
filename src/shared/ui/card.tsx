import {
	type DetailedHTMLProps,
	forwardRef,
	type HTMLAttributes,
	type ReactNode
} from "react"
import { twx } from "src/shared/lib"

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	header?: ReactNode
	footer?: ReactNode
	classNames?: {
		header?: string
		footer?: string
	}
	bordered?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			children,
			className,
			classNames,
			header,
			footer,
			bordered = true,
			...props
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={twx(
					"overflow-hidden rounded-lg bg-white",
					{
						shadow: !bordered,
						"border border-gray-200": bordered
					},
					className
				)}
				{...props}
			>
				{header && (
					<div
						className={twx(
							"border-b border-gray-200 px-4 py-5 sm:px-6",
							classNames?.header
						)}
					>
						{header}
					</div>
				)}
				<div className={"p-4 py-5 sm:p-6"}>{children}</div>
				{footer && (
					<div
						className={twx(
							"border-t border-gray-200 px-4 py-4 sm:px-6",
							classNames?.footer
						)}
					>
						{footer}
					</div>
				)}
			</div>
		)
	}
)
Card.displayName = "Card"

export { Card }
