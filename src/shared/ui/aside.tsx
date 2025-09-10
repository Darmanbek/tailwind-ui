import {
	type DetailedHTMLProps,
	forwardRef,
	type HTMLAttributes,
	type ReactNode,
} from "react"
import { twx } from "src/shared/lib"

export interface AsideProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	collapsed?: boolean
	footer?: ReactNode
	header?: ReactNode
}

const Aside = forwardRef<HTMLElement, AsideProps>(
	({ className, header, footer, ...props }, ref) => {
		return (
			<aside
				ref={ref}
				className={twx(
					"hidden md:block w-72 border-r border-gray-200 dark:border-white/20 p-6 min-h-full",
					{
						"pt-0": header,
						"pb-0": footer,
					},
					className
				)}
				{...props}
			/>
		)
	}
)
Aside.displayName = "Aside"

export { Aside }
