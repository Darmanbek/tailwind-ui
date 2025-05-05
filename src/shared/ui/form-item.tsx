import {
	forwardRef,
	type ReactNode,
	type  DetailedHTMLProps,
	type  HTMLAttributes
} from "react"
import { twx } from "src/shared/lib"

export interface FormItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label?: ReactNode
	classNames?: {
		label?: string,
		body?: string
		extra?: string
	}
	extra?: ReactNode
	name?: string
}

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
	({ label, name, children, classNames, extra, ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
			>
				{label && (
					<>
						<div className={"flex items-center justify-between"}>
							<label
								htmlFor={name}
								className={twx("block text-sm/6 font-medium text-foreground", classNames?.label)}
							>
								{label}
							</label>
							<div className={twx("flex items-center text-sm gap-1",classNames?.extra)}>
								{extra}
							</div>
						</div>
					</>
				)}
				<div className={twx("mt-2", classNames?.body)}>
					{children}
				</div>
			</div>
		)
	}
)
FormItem.displayName = "FormItem"

export { FormItem }
