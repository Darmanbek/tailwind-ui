import { ChevronDownIcon } from "@heroicons/react/16/solid"
import {
	type DetailedHTMLProps,
	forwardRef,
	type SelectHTMLAttributes
} from "react"
import { twx } from "src/shared/lib"

export interface SelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	classNames?: {
		wrapper?: string
	}
	items?: {
		value: string
		label: string
	}[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ items, className, classNames, ...props }, ref) => {
		return (
			<div className={twx("w-full grid grid-cols-1", classNames?.wrapper)}>
				<select
					ref={ref}
					className={
						"outline " +
						twx(
							"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
							className
						)
					}
					{...props}
				>
					{items?.map((item, index) => (
						<option value={item.value} key={index}>
							{item.label}
						</option>
					))}
				</select>
				<ChevronDownIcon
					aria-hidden={"true"}
					className={
						"pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
					}
				/>
			</div>
		)
	}
)
Select.displayName = "Select"

export { Select }
