import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentPropsWithRef, SVGProps } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib/twx.ts"
import { DotIcon, XIcon } from "./icons"

const badgeVariants = cva(
	"inline-flex items-center px-2 py-1 text-xs font-medium",
	{
		variants: {
			color: {
				default:
					"bg-gray-50 dark:bg-gray-400/10 text-gray-600 dark:text-gray-400",
				red: "bg-red-50 dark:bg-red-400/10 text-red-700 dark:text-red-400",
				yellow:
					"bg-yellow-50 dark:bg-yellow-400/10 text-yellow-800 dark:text-yellow-400",
				green:
					"bg-green-50 dark:bg-green-400/10 text-green-700 dark:text-green-400",
				blue: "bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400",
				indigo:
					"bg-indigo-50 dark:bg-indigo-400/10 text-indigo-700 dark:text-indigo-400",
				purple:
					"bg-purple-50 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400",
				pink: "bg-pink-50 dark:bg-pink-400/10 text-pink-700 dark:text-pink-400",
			},
			size: {
				default: "px-2 py-1",
				sm: "px-1.5 py-0.5",
			},
			dot: {
				true: "gap-x-1.5",
				false: "",
			},
			pill: {
				true: "rounded-full",
				false: "rounded-md",
			},
			button: {
				true: "gap-x-0.5",
				false: "",
			},
			flat: {
				true: "",
				false: "inset-ring",
			},
		},
		compoundVariants: [
			{
				color: "default",
				flat: false,
				className: "inset-ring-gray-500/10 dark:inset-ring-gray-400/20",
			},
			{
				color: "red",
				flat: false,
				className: "inset-ring-red-600/10 dark:inset-ring-red-400/20",
			},
			{
				color: "yellow",
				flat: false,
				className: "inset-ring-yellow-600/20 dark:inset-ring-yellow-400/20",
			},
			{
				color: "green",
				flat: false,
				className: "inset-ring-green-600/20 dark:inset-ring-green-400/20",
			},
			{
				color: "blue",
				flat: false,
				className: "inset-ring-blue-700/10 dark:inset-ring-blue-400/20",
			},
			{
				color: "indigo",
				flat: false,
				className: "inset-ring-indigo-700/10 dark:inset-ring-indigo-400/20",
			},
			{
				color: "purple",
				flat: false,
				className: "inset-ring-purple-700/10 dark:inset-ring-purple-400/20",
			},
			{
				color: "pink",
				flat: false,
				className: "inset-ring-pink-700/10 dark:inset-ring-pink-400/20",
			},

			{
				flat: false,
				dot: true,
				className:
					"bg-transparent dark:bg-transparent text-gray-900 dark:text-white",
			},

			{
				flat: false,
				dot: true,
				className: "inset-ring-gray-200 dark:inset-ring-white/10",
			},

			{
				color: "default",
				flat: true,
				className: "bg-gray-100",
			},
			{
				color: "red",
				flat: true,
				className: "bg-red-100",
			},
			{
				color: "yellow",
				flat: true,
				className: "bg-yellow-100",
			},
			{
				color: "green",
				flat: true,
				className: "bg-green-100",
			},
			{
				color: "blue",
				flat: true,
				className: "bg-blue-100",
			},
			{
				color: "indigo",
				flat: true,
				className: "bg-indigo-100",
			},
			{
				color: "purple",
				flat: true,
				className: "bg-purple-100",
			},
			{
				color: "pink",
				flat: true,
				className: "bg-pink-100",
			},
		],
		defaultVariants: {
			color: "default",
			size: "default",
			pill: false,
			dot: false,
			flat: false,
		},
	}
)

export interface BadgeProps
	extends Omit<ComponentPropsWithRef<"span">, "color">,
		VariantProps<typeof badgeVariants> {
	className?: string
	classNames?: {
		dot?: string
		button?: string
		icon?: string
	}
	onClose?: ComponentPropsWithRef<"button">["onClick"]
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			className,
			classNames,
			color,
			pill,
			dot,
			children,
			button,
			flat,
			size,
			onClose,
			...props
		},
		ref
	) => {
		return (
			<span
				ref={ref}
				className={twx(
					badgeVariants({
						color,
						size,
						pill,
						dot,
						button,
						flat,
						className,
					})
				)}
				{...props}
			>
				{dot && (
					<BadgeDot
						color={color}
						className={classNames?.dot}
					/>
				)}
				{children}
				{button && (
					<BadgeButton
						color={color}
						className={classNames?.button}
						classNames={{ icon: classNames?.icon }}
						onClick={onClose}
					/>
				)}
			</span>
		)
	}
)
Badge.displayName = "Badge"

const badgeDotVariants = cva("size-1.5", {
	variants: {
		color: {
			default: "fill-gray-500",
			red: "fill-red-500",
			yellow: "fill-yellow-500",
			green: "fill-green-500",
			blue: "fill-blue-500",
			indigo: "fill-indigo-500",
			purple: "fill-purple-500",
			pink: "fill-pink-500",
		},
	},
	defaultVariants: {
		color: "default",
	},
})
export interface BadgeDotProps
	extends Omit<SVGProps<SVGSVGElement>, "color">,
		VariantProps<typeof badgeDotVariants> {
	className?: string
}

const BadgeDot = forwardRef<SVGSVGElement, BadgeDotProps>(
	({ className, color, ...props }, ref) => {
		return (
			<DotIcon
				className={twx(badgeDotVariants({ color, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
BadgeDot.displayName = "BadgeDot"

const badgeButtonVariants = cva(
	"group relative -mr-1 size-3.5 rounded-xs cursor-pointer",
	{
		variants: {
			color: {
				default: "hover:bg-gray-500/20",
				red: "hover:bg-red-500/20",
				yellow: "hover:bg-yellow-500/20",
				green: "hover:bg-green-500/20",
				blue: "hover:bg-blue-500/20",
				indigo: "hover:bg-indigo-500/20",
				purple: "hover:bg-purple-500/20",
				pink: "hover:bg-pink-500/20",
			},
		},
		defaultVariants: {
			color: "default",
		},
	}
)

const badgeButtonIconVariants = cva("size-3.5", {
	variants: {
		color: {
			default: "stroke-gray-600/50 group-hover:stroke-gray-600/75",
			red: "stroke-red-600/50 group-hover:stroke-red-600/75",
			yellow: "stroke-yellow-600/50 group-hover:stroke-yellow-600/75",
			green: "stroke-green-600/50 group-hover:stroke-green-600/75",
			blue: "stroke-blue-600/50 group-hover:stroke-blue-600/75",
			indigo: "stroke-indigo-600/50 group-hover:stroke-indigo-600/75",
			purple: "stroke-purple-600/50 group-hover:stroke-purple-600/75",
			pink: "stroke-pink-600/50 group-hover:stroke-pink-600/75",
		},
	},
	defaultVariants: {
		color: "default",
	},
})

export interface BadgeButtonProps
	extends Omit<ComponentPropsWithRef<"button">, "color">,
		VariantProps<typeof badgeButtonVariants> {
	className?: string
	classNames?: {
		icon?: string
	}
}

const BadgeButton = forwardRef<HTMLButtonElement, BadgeButtonProps>(
	({ className, classNames, color, ...props }, ref) => {
		return (
			<button
				type={"button"}
				className={twx(badgeButtonVariants({ color, className }))}
				ref={ref}
				{...props}
			>
				<span className={"sr-only"}>Remove</span>
				<XIcon
					className={badgeButtonIconVariants({
						color,
						className: classNames?.icon,
					})}
				/>
				<span className={"absolute -inset-1"}></span>
			</button>
		)
	}
)
BadgeButton.displayName = "BadgeButton"

export { Badge }
