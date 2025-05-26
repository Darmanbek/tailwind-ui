import { createFileRoute } from "@tanstack/react-router"
import { LoginPage } from "src/pages/login"

export const Route = createFileRoute("/(page-examples)/login")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<LoginPage />
		</>
	)
}
