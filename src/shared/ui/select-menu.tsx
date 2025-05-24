import type { ListboxProps } from "@headlessui/react"
import {
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions
} from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/16/solid"
import { CheckIcon } from "@heroicons/react/20/solid"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

export interface SelectMenuProps extends ListboxProps {
	label?: string
	items?: {
		value: string
		avatar?: string
		label: string
	}[]
	classNames?: {
		select?: string
	}
}

const SelectMenu = forwardRef<HTMLElement, SelectMenuProps>(
	({ label, classNames, items, ...props }, ref) => {
		return (
			<Listbox ref={ref} {...props}>
				{label && (
					<Label className={"block text-sm/6 font-medium text-gray-900"}>
						{label}
					</Label>
				)}
				<div
					className={twx("relative w-full", {
						"mt-2": label
					})}
				>
					<ListboxButton
						className={
							"outline " +
							twx(
								"grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							)
						}
					>
						<span
							className={"col-start-1 row-start-1 flex items-center gap-3 pr-6"}
						>
							{/*<img*/}
							{/*	alt={""}*/}
							{/*	src={selected.avatar}*/}
							{/*	className={"size-5 shrink-0 rounded-full"}*/}
							{/*/>*/}
							<span className={"block truncate"}>{props.value}</span>
						</span>
						<ChevronUpDownIcon
							aria-hidden={"true"}
							className={
								"col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
							}
						/>
					</ListboxButton>

					<ListboxOptions
						transition={true}
						className={
							"absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
						}
					>
						{items?.map((item) => (
							<ListboxOption
								key={item.value}
								value={item}
								className={
									"group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
								}
							>
								<div className={"flex items-center"}>
									{item.avatar && (
										<img
											alt={""}
											src={item.avatar}
											className={"size-5 shrink-0 rounded-full"}
										/>
									)}
									<span
										className={
											"ml-3 block truncate font-normal group-data-selected:font-semibold"
										}
									>
										{item.label}
									</span>
								</div>

								<span
									className={
										"absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white"
									}
								>
									<CheckIcon aria-hidden={"true"} className={"size-5"} />
								</span>
							</ListboxOption>
						))}
					</ListboxOptions>
				</div>
			</Listbox>
		)
	}
)
SelectMenu.displayName = "SelectMenu"

export { SelectMenu }
