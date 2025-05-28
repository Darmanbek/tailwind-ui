import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface FieldsetProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Fieldset = forwardRef<HTMLDivElement, FieldsetProps>((props, ref) => {
	return <div ref={ref} {...props} />
})
Fieldset.displayName = "Fieldset"

export { Fieldset }
