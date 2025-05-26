import {
	type DetailedHTMLProps,
	forwardRef,
	type HTMLAttributes,
	type ReactNode
} from "react"
import { twx } from "src/shared/lib"

export interface DividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
	label?: ReactNode
	extra?: ReactNode
	position?: "start" | "center" | "end"
	level?: "label" | "title"
	classNames?: {
		wrapper?: string
		divider?: string
		label?: string
	}
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, classNames, label, position, extra, level, ...props }, ref) => {
		return (
			<div ref={ref} className={twx("relative w-full", className)} {...props}>
				<div
					className={twx(
						"absolute inset-0 flex items-center",
						classNames?.wrapper
					)}
					aria-hidden={"true"}
				>
					<div
						className={twx(
							"w-full border-t border-gray-300",
							classNames?.divider
						)}
					></div>
				</div>
				{(label || extra) && (
					<div
						className={twx("relative flex justify-center items-center", {
							"justify-start": position === "start" && (!extra || !label),
							"justify-center": position === "center" && (!extra || !label),
							"justify-end": position === "end" && (!extra || !label),
							"justify-between": label && extra
						})}
					>
						{label && (
							<span
								className={twx("bg-white px-2 text-sm text-gray-500", {
									"text-base px-3 font-semibold text-gray-900":
										level === "title"
								})}
							>
								{label}
							</span>
						)}
						{extra}
					</div>
				)}
			</div>
		)
	}
)
Divider.displayName = "Divider"

export { Divider }
