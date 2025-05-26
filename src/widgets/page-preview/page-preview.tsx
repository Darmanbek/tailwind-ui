import { type FC } from "react"
import { Logo } from "src/widgets/logo"

interface PagePreview {
	title: string
}

const PagePreview: FC<PagePreview> = ({ title }) => {
	return (
		<>
			<div className={"flex justify-center items-center flex-grow"}>
				<div className={"flex gap-1 items-center"}>
					<Logo size={"lg"} /> - <h1 className={"text-lg"}>{title}</h1>
				</div>
			</div>
		</>
	)
}

export { PagePreview }
