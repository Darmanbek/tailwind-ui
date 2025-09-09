import { type ComponentPropsWithRef, forwardRef, type SVGProps } from "react"
import { twx } from "src/shared/lib"

export interface PlaceholderProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const SVGFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		fill={"none"}
		{...props}
	>
		<defs>
			<pattern
				id={"pattern-5d2bf226-8842-4a73-b0ec-79024c437585"}
				width={"10"}
				height={"10"}
				x={"0"}
				y={"0"}
				patternUnits={"userSpaceOnUse"}
			>
				<path d={"M-3 13 15-5M-5 5l18-18M-1 21 17 3"}></path>
			</pattern>
		</defs>
		<rect
			width={"100%"}
			height={"100%"}
			fill={"url(#pattern-5d2bf226-8842-4a73-b0ec-79024c437585)"}
			stroke={"none"}
		></rect>
	</svg>
)

const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					"relative h-full w-full overflow-hidden rounded-sm border border-dashed opacity-75 border-gray-400 dark:border-white/20 bg-white dark:bg-gray-800",
					className
				)}
				{...props}
			>
				<SVGFill
					className={
						"absolute inset-0 size-full stroke-gray-900/10 dark:stroke-white/10"
					}
				/>
			</div>
		)
	}
)
Placeholder.displayName = "Placeholder"

export { Placeholder }
