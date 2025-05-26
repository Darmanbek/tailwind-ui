import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { twx } from "src/shared/lib"

export interface PlaceholderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx("relative w-full h-full", className)}
				{...props}
			>
				<div className={"absolute inset-0"}>
					<div
						className={
							"relative h-full overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75"
						}
					>
						<svg
							className={"absolute inset-0 size-full stroke-gray-900/10"}
							fill={"none"}
						>
							<defs>
								<pattern
									id={"pattern-510798f3-74a4-4150-a0cf-4e93e8f4fbdf"}
									x={"0"}
									y={"0"}
									width={"10"}
									height={"10"}
									patternUnits={"userSpaceOnUse"}
								>
									<path d={"M-3 13 15-5M-5 5l18-18M-1 21 17 3"}></path>
								</pattern>
							</defs>
							<rect
								stroke={"none"}
								fill={"url(#pattern-510798f3-74a4-4150-a0cf-4e93e8f4fbdf)"}
								width={"100%"}
								height={"100%"}
							></rect>
						</svg>
					</div>
				</div>
			</div>
		)
	}
)
Placeholder.displayName = "Placeholder"

export { Placeholder }
