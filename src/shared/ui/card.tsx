import type { ComponentPropsWithRef, ElementType } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

export interface CardProps extends ComponentPropsWithRef<"div"> {
	className?: string
	edgeToEdge?: boolean
	well?: boolean
	flat?: boolean
	as?: ElementType
}

const Card = forwardRef<HTMLElement, CardProps>(
	({ children, className, edgeToEdge, well, flat, as, ...props }, ref) => {
		const Comp = as || "div"
		return (
			<Comp
				ref={ref}
				className={twx(
					"overflow-hidden bg-white dark:bg-gray-800",
					{
						"rounded-lg": !edgeToEdge,
						"not-dark:shadow dark:outline-1 -outline-offset-1 outline-white/10":
							!well && !flat,
						"border-1 border-gray-300": flat,
						"bg-gray-50": well,
						"sm:rounded-lg": edgeToEdge,
					},
					className
				)}
				{...props}
			>
				{children}
			</Comp>
		)
	}
)
Card.displayName = "Card"

export interface CardBodyProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx("px-4 py-5 sm:p-6", className)}
				{...props}
			>
				{children}
			</div>
		)
	}
)
CardBody.displayName = "CardBody"

export interface CardHeaderProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"border-b border-gray-200 dark:border-white/10 px-4 py-5 sm:p-6",
					className
				)}
				{...props}
			>
				{children}
			</div>
		)
	}
)
CardHeader.displayName = "CardHeader"

export interface CardFooterProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"border-t border-gray-200 dark:border-white/10 px-4 py-4 sm:p-6",
					className
				)}
				{...props}
			>
				{children}
			</div>
		)
	}
)
CardFooter.displayName = "CardFooter"

export { Card, CardBody, CardFooter, CardHeader }
