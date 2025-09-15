import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef, SVGProps } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

// language=tailwindcss
const buttonVariants = cva(
	"relative cursor-pointer inline-flex items-center justify-center gap-x-1.5 font-semibold not-dark:shadow-xs",
	{
		variants: {
			variant: {
				default:
					"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
				text: "text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",
				secondary:
					"bg-white dark:bg-white/10 text-gray-900 dark:text-white ring-1 ring-gray-300 dark:ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20",
				soft: "bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/30",
			},
			size: {
				xs: "px-2 py-1 rounded text-xs",
				sm: "px-2 py-1 rounded text-sm",
				md: "px-2.5 py-1.5 rounded-md text-sm",
				lg: "px-3 py-2 rounded-md text-sm",
				xl: "px-3.5 py-2.5 rounded-md text-sm",
			},
			rounded: {
				true: "rounded-full",
				false: "",
			},
			circular: {
				true: "",
				false: "",
			},
			loading: {
				true: "opacity-50 pointer-events-none cursor-not-allowed",
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
		},
	}
)

export interface ButtonProps
	extends Omit<ComponentPropsWithRef<"button">, "color">,
		VariantProps<typeof buttonVariants> {
	color?: string
	srOnly?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			children,
			srOnly,
			circular,
			rounded,
			loading,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type={"button"}
				disabled={!!loading}
				className={twx(
					buttonVariants({
						variant,
						size,
						rounded,
						circular,
						className,
						loading,
					})
				)}
				{...props}
			>
				<span className={"absolute -inset-1.5"}></span>
				{srOnly && <span className={"sr-only"}>{srOnly}</span>}
				{children}
			</button>
		)
	}
)
Button.displayName = "Button"

const buttonIconVariants = cva("shrink-0", {
	variants: {
		variant: {
			leading: "",
			trailing: "",
		},
		size: {
			xs: "size-3",
			sm: "size-4",
			md: "size-4",
			lg: "size-5",
			xl: "size-5",
			xxl: "size-6",
		},
		loading: {
			true: "animate-spin",
			false: "",
		},
	},
	compoundVariants: [
		{
			variant: "leading",
			size: ["xs", "sm"],
			className: "-ml-0.5",
		},
		{
			variant: "leading",
			size: ["md", "lg"],
			className: "-ml-0.75",
		},
		{
			variant: "leading",
			size: ["xl", "xxl"],
			className: "-ml-1",
		},
		{
			variant: "trailing",
			size: ["xs", "sm"],
			className: "-mr-0.5",
		},
		{
			variant: "trailing",
			size: ["md", "lg"],
			className: "-mr-0.75",
		},
		{
			variant: "trailing",
			size: ["xl", "xxl"],
			className: "-mr-1",
		},
	],
	defaultVariants: {
		size: "md",
	},
})

export interface ButtonIconProps
	extends Omit<SVGProps<SVGSVGElement>, "children">,
		VariantProps<typeof buttonIconVariants> {
	icon: typeof ArrowPathIcon
}

const ButtonIcon = forwardRef<SVGSVGElement, ButtonIconProps>(
	({ className, variant, size, icon: Icon, loading, ...props }, ref) => {
		const Comp = loading ? ArrowPathIcon : Icon

		return (
			<Comp
				ref={ref}
				type={"button"}
				aria-hidden={true}
				className={twx(
					buttonIconVariants({
						size,
						variant,
						loading,
						className,
					})
				)}
				data-slot={"icon"}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, ButtonIcon }
