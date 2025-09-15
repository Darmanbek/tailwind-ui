import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef, ReactNode, SVGProps } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

// language=tailwindcss
// inline-flex items-center gap-x-1.5 font-semibold not-dark:shadow-xs
const buttonVariants = cva(
	"relative cursor-pointer inline-flex items-center justify-center gap-x-1.5 font-semibold not-dark:shadow-xs *:data-[slot=icon]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
				text: "text-gray-400 hover:text-gray-500 dark:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",
				secondary:
					"bg-white dark:bg-white/10 text-gray-900 dark:text-white ring-1 ring-gray-300 dark:ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20",
				soft: "bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/30",
			},
			size: {
				xs: "px-2 py-1 rounded text-xs *:data-[slot=icon]:size-3",
				sm: "px-2 py-1 rounded text-sm *:data-[slot=icon]:size-4",
				md: "px-2.5 py-1.5 rounded-md text-sm *:data-[slot=icon]:size-4",
				lg: "px-3 py-2 rounded-md text-sm *:data-[slot=icon]:size-5",
				xl: "px-3.5 py-2.5 rounded-md text-sm *:data-[slot=icon]:size-5",
			},
			rounded: {
				true: "rounded-full",
				false: "",
			},
			circular: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				size: ["xs", "sm"],
				circular: true,
				className: "px-1",
			},
			{
				size: "md",
				circular: true,
				className: "px-1.5",
			},
			{
				size: "lg",
				circular: true,
				className: "px-2",
			},
			{
				size: "xl",
				circular: true,
				className: "px-2.5",
			},
		],
		defaultVariants: {
			variant: "default",
			size: "md",
			rounded: false,
			// // color: "default"
			// shape: "default",
		},
	}
)

export interface ButtonProps
	extends Omit<ComponentPropsWithRef<"button">, "color">,
		VariantProps<typeof buttonVariants> {
	leadingIcon?: ReactNode
	trailingIcon?: ReactNode
	loading?: boolean
	color?: string
	srOnly?: string
}

const loadingSpin = <ArrowPathIcon className={"animate-spin"} />

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			children,
			srOnly,
			circular,
			loading,
			trailingIcon,
			leadingIcon,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type={"button"}
				className={twx(
					buttonVariants({
						variant,
						size,
						className,
						circular: circular || !children,
					})
				)}
				{...props}
			>
				{loading && !trailingIcon ? loadingSpin : leadingIcon}
				<span className={"absolute -inset-1.5"}></span>
				{srOnly && <span className={"sr-only"}>{srOnly}</span>}
				{children}
				{loading && trailingIcon ? loadingSpin : trailingIcon}
			</button>
		)
	}
)
Button.displayName = "Button"

export interface ButtonIconProps
	extends Omit<SVGProps<SVGSVGElement>, "children">,
		Pick<VariantProps<typeof buttonVariants>, "size"> {
	icon: typeof ArrowPathIcon
	variant: "leading" | "trailing"
}

const ButtonIcon = forwardRef<SVGSVGElement, ButtonIconProps>(
	({ className, variant, icon: Icon, ...props }, ref) => {
		return (
			<Icon
				ref={ref}
				type={"button"}
				className={twx(
					{
						"-ml-0.5": variant === "leading",
						"-mr-0.5": variant === "trailing",
					},
					className
				)}
				data-slot={"icon"}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, ButtonIcon }
