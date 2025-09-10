import { createFileRoute } from "@tanstack/react-router"
import {
	Media,
	MediaAvatar,
	MediaBody,
	MediaDescription,
	MediaTitle,
	Placeholder,
} from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/media-objects")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Basic"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Media>
					<MediaAvatar>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Aligned to center"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Media>
					<MediaAvatar align={"center"}>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Aligned to bottom"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Media>
					<MediaAvatar align={"end"}>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Stretched to fit"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Media>
					<MediaAvatar align={"stretch"}>
						<Placeholder className={"w-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Media on right"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<Media>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
					<MediaAvatar position={"right"}>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Basic responsive"}
				className={"bg-white"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<Media responsive={true}>
					<MediaAvatar responsive={true}>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Wide responsive"}
				className={"bg-white"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<Media responsive={true}>
					<MediaAvatar responsive={true}>
						<Placeholder className={"sm:w-32 h-32"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
					</MediaBody>
				</Media>
			</ResizeContainer>
			<ResizeContainer
				title={"Nested"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<Media>
					<MediaAvatar>
						<Placeholder className={"size-16"} />
					</MediaAvatar>
					<MediaBody>
						<MediaTitle>Lorem ipsum</MediaTitle>
						<MediaDescription>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</MediaDescription>
						<Media item={true}>
							<MediaAvatar>
								<Placeholder className={"size-12"} />
							</MediaAvatar>
							<MediaBody>
								<MediaTitle>Lorem ipsum</MediaTitle>
								<MediaDescription>
									Repudiandae sint consequuntur vel. Amet ut nobis explicabo
									numquam expedita quia omnis voluptatem. Minus quidem ipsam
									quia iusto.
								</MediaDescription>
							</MediaBody>
						</Media>
						<Media item={true}>
							<MediaAvatar>
								<Placeholder className={"size-12"} />
							</MediaAvatar>
							<MediaBody>
								<MediaTitle>Lorem ipsum</MediaTitle>
								<MediaDescription>
									Repudiandae sint consequuntur vel. Amet ut nobis explicabo
									numquam expedita quia omnis voluptatem. Minus quidem ipsam
									quia iusto.
								</MediaDescription>
							</MediaBody>
						</Media>
					</MediaBody>
				</Media>
			</ResizeContainer>
		</>
	)
}
