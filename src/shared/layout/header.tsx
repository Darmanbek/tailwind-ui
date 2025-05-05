import { type  FC } from "react"
import { Title } from "src/shared/ui"

const Header: FC = () => {
	return (
		<>
			<header className={"bg-background border-b border-border shadow"}>
				<div className={"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"}>
					<Title level={"h1"}>Components</Title>
				</div>
			</header>
		</>
	)
}

export { Header }
