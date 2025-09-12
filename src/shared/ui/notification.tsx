import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { forwardRef, type ComponentPropsWithRef } from "react"
import { twx } from "../lib"

const notificationVariants = cva(
	"absolute block rounded-full ring-2 ring-white dark:ring-gray-900",
	{
		variants: {
			color: {
				default: "bg-gray-300 dark:bg-gray-500",
				red: "bg-red-400 dark:bg-red-500",
				green: "bg-green-400 dark:bg-green-500",
			},
			size: {
				xs: "size-1.5",
				sm: "size-2",
				md: "size-2.5",
				lg: "size-3",
				xl: "size-3.5",
				xxl: "size-4",
			},
			square: {
				true: "",
				false: "",
			},
			position: {
				top: "top-0 right-0",
				"top-left": "top-0 left-0",
				bottom: "bottom-0 right-0",
				"bottom-left": "bottom-0 left-0",
			},
		},
		compoundVariants: [
			{
				square: true,
				position: "top",
				className: "translate-x-1/2 -translate-y-1/2",
			},
			{
				square: true,
				position: "top-left",
				className: "-translate-x-1/2 -translate-y-1/2",
			},
			{
				square: true,
				position: "bottom",
				className: "translate-x-1/2 translate-y-1/2",
			},
			{
				square: true,
				position: "bottom-left",
				className: "-translate-x-1/2 translate-y-1/2",
			},
		],
		defaultVariants: {
			color: "default",
			size: "md",
			square: false,
			position: "top",
		},
	}
)

export interface NotificationProps
	extends Omit<ComponentPropsWithRef<"span">, "color">,
		VariantProps<typeof notificationVariants> {
	className?: string
	classNames?: {
		indicator?: string
	}
}

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
	(
		{
			className,
			children,
			classNames,
			size,
			color,
			position,
			square,
			...props
		},
		ref
	) => {
		return (
			<span
				ref={ref}
				className={twx("relative inline-block", className)}
				{...props}
			>
				{children}
				<span
					className={twx(
						notificationVariants({
							size,
							color,
							position,
							square,
							className: classNames?.indicator,
						})
					)}
				></span>
			</span>
		)
	}
)
Notification.displayName = "Notification"

export { Notification }
