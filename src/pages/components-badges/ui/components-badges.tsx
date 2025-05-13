import { type FC } from "react"
import { Badge } from "src/shared/ui"

const ComponentsBadges: FC = () => {
	return (
		<>
			<div className={"flex gap-4 justify-center items-center"}>
				<Badge>Badge</Badge>
				<Badge color={"red"}>Badge</Badge>
				<Badge color={"yellow"}>Badge</Badge>
				<Badge color={"green"}>Badge</Badge>
				<Badge color={"blue"}>Badge</Badge>
				<Badge color={"indigo"}>Badge</Badge>
				<Badge color={"purple"}>Badge</Badge>
				<Badge color={"pink"}>Badge</Badge>
			</div>
		</>
	)
}

export { ComponentsBadges }
