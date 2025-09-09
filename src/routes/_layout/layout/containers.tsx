import { createFileRoute } from "@tanstack/react-router"
import { Placeholder } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/containers")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Full-width on mobile, constrained with padded content above"}
				classNames={{
					container: "p-0 sm:p-0 lg:p-0",
					body: "max-w-full",
				}}
			>
				<div className={"mx-auto max-w-7xl bg-pink-100 sm:px-6 md:px-8"}>
					<Placeholder className={"h-64 bg-white"} />
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Constrained with padded content"}
				classNames={{
					container: "p-0 sm:p-0 lg:p-0",
					body: "max-w-full",
				}}
			>
				<div className={"mx-auto max-w-7xl bg-pink-100 px-4 sm:px-6 md:px-8"}>
					<Placeholder className={"h-64 bg-white"} />
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={
					"Full-width on mobile, constrained to breakpoint with padded content above mobile"
				}
				className={"dark"}
				classNames={{
					container: "p-0 sm:p-0 lg:p-0",
					body: "max-w-full",
				}}
			>
				<div
					className={
						"mx-auto w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-pink-100 dark:bg-pink-600/15 sm:px-6 md:px-8"
					}
				>
					<Placeholder className={"h-64"} />
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Constrained to breakpoint with padded content"}
				classNames={{
					container: "p-0 sm:p-0 lg:p-0",
					body: "max-w-full",
				}}
			>
				<div
					className={
						"mx-auto w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-pink-100 dark:bg-pink-600/15 sm:px-6 md:px-8"
					}
				>
					<Placeholder className={"h-64"} />
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Narrow constrained with padded content"}
				classNames={{
					container: "p-0 sm:p-0 lg:p-0",
					body: "max-w-full",
				}}
			>
				<div
					className={
						"mx-auto w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-pink-100 dark:bg-pink-600/15 px-4 sm:px-6 md:px-8"
					}
				>
					<div className={"bg-white dark:bg-gray-800"}>
						<Placeholder className={"h-64 max-w-3xl mx-auto"} />
					</div>
				</div>
			</ResizeContainer>
		</>
	)
}
