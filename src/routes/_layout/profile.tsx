import { createFileRoute } from "@tanstack/react-router"
import { ProfilePage } from "src/pages/profile"

export const Route = createFileRoute("/_layout/profile")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ProfilePage />
		</>
	)
}
