import { createFileRoute } from "@tanstack/react-router"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<div className={"flex justify-center items-center flex-grow"}>
				<Logo size={"lg"} />
			</div>
		</>
	)
}
