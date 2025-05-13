import { useEffect, useState } from "react"

export const useToggleTheme = () => {
	const [isDark, setIsDark] = useState(false)

	const toggleIsDark = () => {
		setIsDark((prev) => !prev)
	}

	useEffect(() => {
		document.body.classList.remove("light", "dark")
		document.body.classList.add(isDark ? "dark" : "light")
	}, [isDark])

	return { isDark, toggleIsDark }
}
