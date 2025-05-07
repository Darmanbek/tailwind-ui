import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { cva, type VariantProps } from "class-variance-authority"
import {
	type ButtonHTMLAttributes,
	type DetailedHTMLProps,
	forwardRef,
	type ReactNode
} from "react"
import { twx } from "src/shared/lib"

// language=tailwindcss
const buttonVariants = cva(
	"inline-flex justify-center items-center gap-1.5 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
				secondary:
					"bg-secondary text-foreground dark:text-secondary-foreground hover:bg-secondary-hover border dark:border-transparent focus-visible:outline-primary",
				soft: "bg-soft text-soft-foreground hover:bg-soft-hover focus-visible:outline-primary"
			},
			size: {
				xs: "px-2 [&.square]:px-1 py-1 rounded text-xs [&_svg]:size-3",
				sm: "px-2 [&.square]:px-1 py-1 rounded text-sm [&_svg]:size-4",
				md: "px-3 [&.square]:px-1.5 py-1.5 rounded-md text-sm [&_svg]:size-4",
				lg: "px-3 [&.square]:px-2 py-2 rounded-md text-sm [&_svg]:size-5",
				xl: "px-3.5 [&.square]:px-2.5 py-2.5 rounded-md text-sm [&_svg]:size-5"
			},
			shape: {
				default: "",
				circle: "rounded-[100%]",
				rounded: "rounded-full"
			}
			// color: {
			// 	default:
			// 		"bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
			// 	red: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
			// 	yellow:
			// 		"bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600",
			// 	green:
			// 		"bg-green-600 hover:bg-green-500 focus-visible:outline-green-600",
			// 	blue: "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600",
			// 	indigo:
			// 		"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
			// 	purple:
			// 		"bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600",
			// 	pink: "bg-pink-600 hover:bg-pink-500 focus-visible:outline-pink-600"
			// }
		},
		defaultVariants: {
			variant: "default",
			size: "md",
			// color: "default"
			shape: "default"
		}
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
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={twx(
					buttonVariants({
						variant,
						size,
						shape,
						className
					}),
					{
						square: !children
					}
				)}
				{...props}
			>
				{loading && trailingIcon ? loadingSpin : trailingIcon}
				{children}
				{loading && !trailingIcon ? loadingSpin : leadingIcon}
			</button>
		)
	}
)
Button.displayName = "Button"

export { Button }
