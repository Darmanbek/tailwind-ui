import { MoonIcon } from "@heroicons/react/24/outline"
import { type FC } from "react"
import { Button } from "src/shared/ui"

const ThemeButton: FC = () => {
	return (
		<>
			<Button
				variant={"borderless"}
				className={"rounded-full"}
				size={"lg"}
				leadingIcon={<MoonIcon aria-hidden={"true"} className={"size-6"} />}
				srOnly={"Theme"}
			/>
		</>
	)
}

export { ThemeButton }
