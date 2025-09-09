import { createFileRoute } from "@tanstack/react-router"
import { Card, Placeholder } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/list-containers")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Simple with dividers"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<ul
					className={"divide-y divide-gray-200"}
					role={"list"}
				>
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							key={index}
							className={"py-4"}
						>
							<Placeholder className={"h-16"} />
						</li>
					))}
				</ul>
			</ResizeContainer>
			<ResizeContainer
				title={"Card with dividers"}
				className={"dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Card>
					<ul
						className={"w-full divide-y divide-gray-200 dark:divide-white/10"}
						role={"list"}
					>
						{Array.from({ length: 3 }).map((_, index) => (
							<li
								key={index}
								className={"px-6 py-4"}
							>
								<Placeholder className={"h-16"} />
							</li>
						))}
					</ul>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Card with dividers, full-width on mobile"}
				classNames={{
					body: "max-w-xl",
				}}
				edgeToEdge={true}
			>
				<Card edgeToEdge={true}>
					<ul
						className={"w-full divide-y divide-gray-200 dark:divide-white/10"}
						role={"list"}
					>
						{Array.from({ length: 3 }).map((_, index) => (
							<li
								key={index}
								className={"px-6 py-4"}
							>
								<Placeholder className={"h-16"} />
							</li>
						))}
					</ul>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Separate cards"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<ul
					className={"space-y-3"}
					role={"list"}
				>
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							key={index}
							className={"overflow-hidden rounded-md bg-white px-6 py-4 shadow"}
						>
							<Placeholder className={"h-16"} />
						</li>
					))}
				</ul>
			</ResizeContainer>
			<ResizeContainer
				title={"Separate cards, full-width on mobile"}
				classNames={{
					body: "max-w-xl",
				}}
				edgeToEdge={true}
			>
				<ul
					className={"space-y-3"}
					role={"list"}
				>
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							key={index}
							className={
								"overflow-hidden sm:rounded-md bg-white px-6 py-4 shadow"
							}
						>
							<Placeholder className={"h-16"} />
						</li>
					))}
				</ul>
			</ResizeContainer>
			<ResizeContainer
				title={"Flat card with dividers"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Card flat={true}>
					<ul
						className={"w-full divide-y divide-gray-300 dark:divide-white/10"}
						role={"list"}
					>
						{Array.from({ length: 3 }).map((_, index) => (
							<li
								key={index}
								className={"px-6 py-4"}
							>
								<Placeholder className={"h-16"} />
							</li>
						))}
					</ul>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Simple with dividers"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-xl",
				}}
				edgeToEdge={true}
			>
				<ul
					className={"divide-y divide-gray-200 dark:divide-white/10"}
					role={"list"}
				>
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							key={index}
							className={"px-4 py-4 sm:px-0"}
						>
							<Placeholder className={"h-16 dark"} />
						</li>
					))}
				</ul>
			</ResizeContainer>
		</>
	)
}
