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
				circular={true}
				rounded={true}
				size={"sm"}
				classNames={{
					icon: "size-6",
				}}
				icon={<Icon />}
				onClick={toggleIsDark}
				srOnly={"Theme"}
			/>
		</>
	)
}

export { ThemeButton }
