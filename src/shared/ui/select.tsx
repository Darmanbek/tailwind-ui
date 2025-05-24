import {
	type DetailedHTMLProps,
	forwardRef,
	type SelectHTMLAttributes
} from "react"

export interface SelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	name?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	return <select ref={ref} {...props} />
})
Select.displayName = "Select"

export { Select }
