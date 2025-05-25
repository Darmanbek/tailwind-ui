import { Switch } from "@headlessui/react"
import { createFileRoute } from "@tanstack/react-router"
import { Card } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/components/switchs")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Stack>
					<Switch
						className={
							"group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-white bg-gray-200 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:-ring-offset-2 focus:outline-none data-[checked]:bg-indigo-600"
						}
					>
						<span className={"sr-only"}>Use setting</span>
						<span
							className={
								"pointer-events-none inline-block size-5 rounded-full bg-white shadow focus:ring transition-all duration-200 ease-in-out group-data-[checked]:translate-x-5"
							}
							aria-hidden={"true"}
						></span>
					</Switch>
				</Stack>
			</Card>
		</>
	)
}
