import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentPropsWithRef } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

const cardVariants = cva("overflow-hidden bg-white dark:bg-gray-800", {
	variants: {
		edgeToEdge: {
			true: "sm:rounded-lg",
			false: "rounded-lg",
		},
		well: {
			true: "bg-gray-50",
			false: "",
		},
		flat: {
			true: "border-1 border-gray-300 dark:border-white/10",
			false: "",
		},
	},
	compoundVariants: [
		{
			well: false,
			flat: false,
			className:
				"not-dark:shadow dark:outline-1 dark:-outline-offset-1 outline-white/10",
		},
	],
	defaultVariants: {
		edgeToEdge: false,
		well: false,
		flat: false,
	},
})

export interface CardProps
	extends ComponentPropsWithRef<"div">,
		VariantProps<typeof cardVariants> {
	className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ children, className, edgeToEdge, well, flat, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					cardVariants({
						edgeToEdge,
						well,
						flat,
						className,
					})
				)}
				{...props}
			>
				{children}
			</div>
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
