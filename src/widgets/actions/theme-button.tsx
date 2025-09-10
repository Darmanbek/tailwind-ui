import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { type FC } from "react"
import { useToggleTheme } from "src/shared/hooks"
import { Button } from "src/shared/ui"

const ThemeButton: FC = () => {
	const { isDark, toggleIsDark } = useToggleTheme()

	const Icon = isDark ? SunIcon : MoonIcon

	return (
		<>
			<Button
				variant={"text"}
				className={"rounded-full"}
				size={"lg"}
				onClick={toggleIsDark}
				leadingIcon={
					<Icon
						aria-hidden={"true"}
						className={"size-6"}
					/>
				}
				srOnly={"Theme"}
			/>
		</>
	)
}

export { ThemeButton }
