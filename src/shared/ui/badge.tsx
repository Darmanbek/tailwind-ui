import { forwardRef, type HTMLAttributes } from "react"
import { twx } from "src/shared/lib/twx.ts"
import { type ColorPreset } from "src/shared/types"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	color?: ColorPreset
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, color, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={twx(
					"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
					{
						"bg-gray-50 text-gray-600 ring-gray-500/10": color === "default",
						"bg-red-50 text-red-700 ring-red-600/10": color === "red",
						"bg-yellow-50 text-yellow-800 ring-yellow-600/20":
							color === "yellow",
						"bg-green-50 text-green-700 ring-green-600/20": color === "green",
						"bg-blue-50 text-blue-700 ring-blue-700/10": color === "blue",
						"bg-indigo-50 text-indigo-700 ring-indigo-700/10":
							color === "indigo",
						"bg-purple-50 text-purple-700 ring-purple-700/10":
							color === "purple",
						"bg-pink-50 text-pink-700 ring-gray-pink-700/10":
							color === "default"
					},
					className
				)}
				{...props}
			/>
		)
	}
)
Badge.displayName = "Badge"

export { Badge }
