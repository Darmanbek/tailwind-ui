// import { cva, type VariantProps } from "class-variance-authority"
import {
	type ButtonHTMLAttributes,
	type DetailedHTMLProps,
	forwardRef
} from "react"
import { twx } from "src/shared/lib"
import { ColorPreset } from "src/shared/types"

// const buttonVariants = cva(
// 	"flex justify-center rounded-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
// 	{
// 		variants: {
// 			variant: {
// 				default: "",
// 				secondary: "",
// 				soft: ""
// 			},
// 			size: {
// 				xs: "px-2 py-1",
// 				sm: "",
// 				md: "px-3 py-1.5 text-sm/6 ",
// 				lg: "",
// 				xl: ""
// 			},
// 			color: {
// 				default: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
// 				red: "",
// 				yellow: "",
// 				green: "",
// 				blue: "",
// 				indigo: "",
// 				purple: "",
// 				pink: ""
// 			}
// 		},
// 		defaultVariants: {}
// 	}
// )

export interface ButtonProps
	extends Omit<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		"color"
	> {
	color: ColorPreset
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, color, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={twx(
					"flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
					{
						"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600":
							color === "default" || color === "indigo",
						"bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600":
							color === "yellow",
						"bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600":
							color === "blue",
						"bg-green-600 hover:bg-green-500 focus-visible:outline-green-600":
							color === "green",
						"bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600":
							color === "purple",
						"bg-red-600 hover:bg-red-500 focus-visible:outline-red-600":
							color === "red",
						"bg-pink-600 hover:bg-pink-500 focus-visible:outline-pink-600":
							color === "pink"
					},
					className
				)}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button }
