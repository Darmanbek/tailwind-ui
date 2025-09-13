import type { SVGProps } from "react"
import { forwardRef } from "react"

export interface XIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

const XIcon = forwardRef<SVGSVGElement, XIconProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				viewBox={"0 0 14 14"}
				className={className}
				ref={ref}
				data-slot={"icon"}
				{...props}
			>
				<path d={"M4 4l6 6m0-6l-6 6"}></path>
			</svg>
		)
	}
)
XIcon.displayName = "XIcon"

export { XIcon }
