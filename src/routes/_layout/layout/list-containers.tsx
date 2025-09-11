import { createFileRoute } from "@tanstack/react-router"
import { Card, List, ListItem, Placeholder } from "src/shared/ui"
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
				<List>
					{Array.from({ length: 3 }).map((_, index) => (
						<ListItem key={index}>
							<Placeholder className={"h-16"} />
						</ListItem>
					))}
				</List>
			</ResizeContainer>
			<ResizeContainer
				title={"Card with dividers"}
				className={"dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Card>
					<List>
						{Array.from({ length: 3 }).map((_, index) => (
							<ListItem
								key={index}
								card={true}
							>
								<Placeholder className={"h-16"} />
							</ListItem>
						))}
					</List>
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
					<List className={"w-full"}>
						{Array.from({ length: 3 }).map((_, index) => (
							<ListItem
								key={index}
								className={"px-6 py-4"}
							>
								<Placeholder className={"h-16"} />
							</ListItem>
						))}
					</List>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Separate cards"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<List separate={true}>
					{Array.from({ length: 3 }).map((_, index) => (
						<ListItem
							key={index}
							variant={"card"}
							role={"listitem"}
						>
							<Placeholder className={"h-16"} />
						</ListItem>
					))}
				</List>
			</ResizeContainer>
			<ResizeContainer
				title={"Separate cards, full-width on mobile"}
				classNames={{
					body: "max-w-xl",
				}}
				edgeToEdge={true}
			>
				<List separate={true}>
					{Array.from({ length: 3 }).map((_, index) => (
						<ListItem
							key={index}
							variant={"card"}
							edgeToEdge={true}
						>
							<Placeholder className={"h-16"} />
						</ListItem>
					))}
				</List>
			</ResizeContainer>
			<ResizeContainer
				title={"Flat card with dividers"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Card flat={true}>
					<List className={"w-full"}>
						{Array.from({ length: 3 }).map((_, index) => (
							<ListItem
								key={index}
								card={true}
							>
								<Placeholder className={"h-16"} />
							</ListItem>
						))}
					</List>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Simple with dividers, full-width on mobile"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-xl",
				}}
				edgeToEdge={true}
			>
				<List
					className={"w-full"}
					role={"list"}
				>
					{Array.from({ length: 3 }).map((_, index) => (
						<ListItem
							key={index}
							className={"px-4 sm:px-0"}
						>
							<Placeholder className={"h-16 dark"} />
						</ListItem>
					))}
				</List>
			</ResizeContainer>
		</>
	)
}
