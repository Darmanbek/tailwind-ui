import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Header, MainContent, MainLayout, Sidebar } from "src/shared/layout"
import { Container } from "src/shared/ui"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<Header />
				<div className={"flex w-full flex-grow"}>
					<Sidebar />
					<MainContent className={"flex-grow flex flex-col gap-6"}>
						<Container>
							<Outlet />
						</Container>
					</MainContent>
				</div>
			</MainLayout>
		</>
	)
}
