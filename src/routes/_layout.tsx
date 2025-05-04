import { createFileRoute, Outlet } from "@tanstack/react-router"
import { MainContent, MainLayout, Navbar } from "src/shared/layout"
import { Header } from "src/shared/layout/header.tsx"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<Navbar />
				<Header />
				<MainContent>
					<Outlet />
				</MainContent>
			</MainLayout>
		</>
	)
}
