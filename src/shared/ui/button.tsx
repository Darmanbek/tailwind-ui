import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { cva, type VariantProps } from "class-variance-authority"
import {
	type ButtonHTMLAttributes,
	type DetailedHTMLProps,
	forwardRef,
	type ReactNode,
} from "react"
import { twx } from "src/shared/lib"

// language=tailwindcss
const buttonVariants = cva(
	"inline-flex justify-center items-center gap-1.5 font-semibold focus-visible:outline focus-visible:outline-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2",
	{
		variants: {
			variant: {
				default: "bg-indigo-600 text-white hover:bg-indigo-500",
				borderless:
					"bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white",
				secondary: "bg-gray-50 text-gray-900 hover:bg-gray-100 border",
				soft: "bg-indigo-50 text-indigo-600 hover:bg-gray-100",
			},
			size: {
				xs: "px-2 py-1 rounded text-xs",
				sm: "px-2 py-1 rounded text-sm",
				md: "px-3 py-1.5 rounded-md text-sm",
				lg: "px-3 py-2 rounded-md text-sm",
				xl: "px-3.5 py-2.5 rounded-md text-sm",
			},
			square: {
				true: "",
				false: "",
			},
			shape: {
				default: "",
				circle: "rounded-[100%]",
				rounded: "rounded-full",
			},
		},
		compoundVariants: [
			{
				size: ["xs", "sm"],
				square: true,
				className: "px-1",
			},
			{
				size: "md",
				square: true,
				className: "px-1.5",
			},
			{
				size: "lg",
				square: true,
				className: "px-2",
			},
			{
				size: "xl",
				square: true,
				className: "px-2.5",
			},
			{
				size: ["xs"],
				className: "[&_svg]:size-3",
			},
			{
				size: ["sm", "md"],
				className: "[&_svg]:size-4",
			},
			{
				size: ["lg", "xl"],
				className: "[&_svg]:size-5",
			},
			{
				variant: ["default", "soft", "secondary"],
				className: "shadow-sm",
			},
		],
		defaultVariants: {
			variant: "default",
			size: "md",
			// color: "default"
			shape: "default",
		},
	}
)

export interface ButtonProps
	extends Omit<
			DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>,
			"color"
		>,
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
			shape,
			children,
			trailingIcon,
			leadingIcon,
			loading,
			square,
			srOnly,
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
						shape,
						className,
						square: square || !children,
					})
				)}
				{...props}
			>
				{loading && trailingIcon ? loadingSpin : trailingIcon}
				{children}
				<span className={"sr-only"}>{srOnly}</span>
				{loading && !trailingIcon ? loadingSpin : leadingIcon}
			</button>
		)
	}
)
Button.displayName = "Button"

export { Button }
