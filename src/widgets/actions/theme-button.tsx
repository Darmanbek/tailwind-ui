import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { type FC } from "react"
import { useToggleTheme } from "src/shared/hooks"
import { Button, ButtonIcon } from "src/shared/ui"

const ThemeButton: FC = () => {
	const { isDark, toggleIsDark } = useToggleTheme()

	const Icon = isDark ? SunIcon : MoonIcon

	return (
		<>
			<Button
				variant={"text"}
				circular={true}
				rounded={true}
				size={"sm"}
				onClick={toggleIsDark}
				srOnly={"Theme"}
			>
				<ButtonIcon
					icon={Icon}
					size={"xxl"}
				/>
			</Button>
		</>
	)
}

export { ThemeButton }
