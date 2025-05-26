import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface ModalDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
	(props, ref) => {
		return <div ref={ref} {...props} />
	}
)
ModalDialog.displayName = "ModalDialog"

export { ModalDialog }
