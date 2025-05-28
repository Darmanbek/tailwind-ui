import { createFileRoute } from "@tanstack/react-router"
import { Card, Placeholder } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/layout/list-containers")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<ul
						className={"divide-y divide-gray-200 max-w-md w-full"}
						role={"list"}
					>
						{Array.from({ length: 3 }).map((_, index) => (
							<li key={index} className={"py-4"}>
								<Placeholder className={"h-16"} />
							</li>
						))}
					</ul>
				</Stack>
			</Card>
		</>
	)
}
