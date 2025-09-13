import type { SVGProps } from "react"
import { forwardRef } from "react"

export interface DotIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

const DotIcon = forwardRef<SVGSVGElement, DotIconProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				viewBox={"0 0 6 6"}
				aria-hidden={"true"}
				ref={ref}
				className={className}
				data-slot={"icon"}
				{...props}
			>
				<circle
					r={"3"}
					cx={"3"}
					cy={"3"}
				></circle>
			</svg>
		)
	}
)
DotIcon.displayName = "DotIcon"

export { DotIcon }
