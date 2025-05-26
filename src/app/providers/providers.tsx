import { type FC, type PropsWithChildren } from "react"
import { Toaster } from "react-hot-toast"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{children}
			<Toaster position={"top-right"} />
		</>
	)
}

export { Providers }
