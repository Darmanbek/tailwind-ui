import {
	Switch as HeadlessSwitch,
	type SwitchProps as HeadlessSwitchProps
} from "@headlessui/react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

export interface SwitchProps extends HeadlessSwitchProps {
	className?: string
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
	({ className, ...props }, ref) => {
		return (
			<HeadlessSwitch
				className={twx(
					"group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-gray-200 bg-gray-200 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none data-[checked]:bg-indigo-600 data-[checked]:border-indigo-600",
					className
				)}
				ref={ref}
				{...props}
			>
				<span className={"sr-only"}>Use setting</span>
				<span
					className={
						"pointer-events-none inline-block size-5 rounded-full bg-white shadow focus:ring transition-all duration-200 ease-in-out group-data-[checked]:translate-x-5"
					}
					aria-hidden={"true"}
				></span>
			</HeadlessSwitch>
		)
	}
)
Switch.displayName = "Switch"

export { Switch }
