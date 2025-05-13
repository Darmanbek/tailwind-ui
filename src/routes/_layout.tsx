import { createFileRoute, Outlet } from "@tanstack/react-router"
import { MainContent, MainLayout, Navbar, Sidebar } from "src/shared/layout"
import { Header } from "src/shared/layout/header.tsx"
import { Container } from "src/shared/ui"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<Navbar />
				<Header />
				<Container className={"flex w-full flex-grow"}>
					<Sidebar />
					<MainContent className={"flex-grow flex flex-col gap-6"}>
						<Outlet />
					</MainContent>
				</Container>
			</MainLayout>
		</>
	)
}
