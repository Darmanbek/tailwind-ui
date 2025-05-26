import { createFileRoute } from "@tanstack/react-router"
import { Card, Select } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/selects")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Select
						classNames={{
							wrapper: "max-w-80"
						}}
						items={[
							{
								value: "us",
								label: "United States"
							},
							{
								value: "ca",
								label: "Canada"
							},
							{
								value: "mx",
								label: "Mexico"
							}
						]}
					/>
				</Stack>
			</Card>
		</>
	)
}
