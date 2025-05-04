import type { FC, PropsWithChildren } from "react"
import { twx } from "src/shared/lib"

interface MainLayoutProps {
	className?: string
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	className,
	children
}) => {
	return <div className={twx("min-h-full", className)}>{children}</div>
}

export { MainLayout }
