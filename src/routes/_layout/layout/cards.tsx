import { createFileRoute } from "@tanstack/react-router"
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Placeholder,
} from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/cards")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer title={"Basic Card"}>
				<Card>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Card, edge-to-edge on mobile"}
				className={"dark"}
				edgeToEdge={true}
			>
				<Card edgeToEdge={true}>
					<CardBody>
						<Placeholder className={"h-64 dark"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer title={"Card with header"}>
				<Card>
					<CardHeader>
						<Placeholder className={"h-8"} />
					</CardHeader>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer title={"Card with footer"}>
				<Card>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
					<CardFooter>
						<Placeholder className={"h-8"} />
					</CardFooter>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Card with header and footer"}
				className={"dark"}
			>
				<Card>
					<CardHeader>
						<Placeholder className={"h-8"} />
					</CardHeader>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
					<CardFooter>
						<Placeholder className={"h-8"} />
					</CardFooter>
				</Card>
			</ResizeContainer>
			<ResizeContainer title={"Card with gray footer"}>
				<Card>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
					<CardFooter className={"bg-gray-50 dark:bg-gray-900 border-t-0"}>
						<Placeholder className={"h-8"} />
					</CardFooter>
				</Card>
			</ResizeContainer>
			<ResizeContainer title={"Card with gray body"}>
				<Card>
					<CardHeader className={"border-b-0"}>
						<Placeholder className={"h-8"} />
					</CardHeader>
					<CardBody className={"bg-gray-50 dark:bg-gray-900"}>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				title={"Well"}
				className={"dark"}
			>
				<Card well={true}>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer title={"Well on gray"}>
				<Card
					well={true}
					className={"bg-gray-200"}
				>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
			<ResizeContainer
				className={"bg-white"}
				title={"Well, edge-to-edge on mobile"}
				edgeToEdge={true}
			>
				<Card
					well={true}
					edgeToEdge={true}
				>
					<CardBody>
						<Placeholder className={"h-64"} />
					</CardBody>
				</Card>
			</ResizeContainer>
		</>
	)
}
