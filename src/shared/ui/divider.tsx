import type { ComponentPropsWithRef } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

export interface DividerProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx("flex items-center", className)}
				{...props}
			>
				{children || <DividerLine />}
			</div>
		)
	}
)
Divider.displayName = "Divider"

export interface DividerLineProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const DividerLine = forwardRef<HTMLDivElement, DividerLineProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"w-full border-t my-2 border-gray-300 dark:border-white/15",
					className
				)}
				aria-hidden={true}
				{...props}
			>
				{children}
			</div>
		)
	}
)
DividerLine.displayName = "DividerLine"

export interface DividerBodyProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const DividerBody = forwardRef<HTMLDivElement, DividerBodyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx("relative flex justify-center", className)}
				{...props}
			>
				{children}
			</div>
		)
	}
)
DividerBody.displayName = "DividerBody"

export { Divider, DividerBody, DividerLine }
