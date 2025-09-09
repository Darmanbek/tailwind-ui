import { createFileRoute } from "@tanstack/react-router"
import { Placeholder } from "src/shared/ui"
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
				<div className={"flex"}>
					<div className={"mr-4 shrink-0"}>
						<Placeholder className={"size-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900"}>Lorem ipsum</h4>
						<p className={"mt-1 text-gray-500"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Aligned to center"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<div className={"flex"}>
					<div className={"mr-4 shrink-0 self-center"}>
						<Placeholder className={"size-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Aligned to bottom"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<div className={"flex"}>
					<div className={"mr-4 shrink-0 self-end"}>
						<Placeholder className={"size-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Stretched to fit"}
				className={"bg-white"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<div className={"flex"}>
					<div className={"mr-4 shrink-0 self-stretch"}>
						<Placeholder className={"w-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Media on right"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-md",
				}}
			>
				<div className={"flex"}>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
					<div className={"mr-4 shrink-0"}>
						<Placeholder className={"size-16"} />
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Basic responsive"}
				className={"bg-white"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<div className={"sm:flex"}>
					<div className={"mb-4 shrink-0 sm:mr-4 sm:mb-0"}>
						<Placeholder className={"size-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Wide responsive"}
				className={"bg-white"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<div className={"sm:flex"}>
					<div className={"mb-4 shrink-0 sm:mr-4 sm:mb-0  "}>
						<Placeholder className={"sm:w-32 h-32"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
					</div>
				</div>
			</ResizeContainer>
			<ResizeContainer
				title={"Nested"}
				className={"bg-white dark"}
				classNames={{
					body: "max-w-2xl",
				}}
			>
				<div className={"flex"}>
					<div className={"mr-4 shrink-0"}>
						<Placeholder className={"size-16"} />
					</div>
					<div>
						<h4 className={"text-lg font-bold text-gray-900 dark:text-white"}>
							Lorem ipsum
						</h4>
						<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
							Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
							expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
						</p>
						<div className={"flex mt-6"}>
							<div className={"mr-4 shrink-0"}>
								<Placeholder className={"size-12"} />
							</div>
							<div>
								<h4
									className={"text-lg font-bold text-gray-900 dark:text-white"}
								>
									Lorem ipsum
								</h4>
								<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
									Repudiandae sint consequuntur vel. Amet ut nobis explicabo
									numquam expedita quia omnis voluptatem. Minus quidem ipsam
									quia iusto.
								</p>
							</div>
						</div>
						<div className={"flex mt-6"}>
							<div className={"mr-4 shrink-0"}>
								<Placeholder className={"size-12"} />
							</div>
							<div>
								<h4
									className={"text-lg font-bold text-gray-900 dark:text-white"}
								>
									Lorem ipsum
								</h4>
								<p className={"mt-1 text-gray-500 dark:text-gray-400"}>
									Repudiandae sint consequuntur vel. Amet ut nobis explicabo
									numquam expedita quia omnis voluptatem. Minus quidem ipsam
									quia iusto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</ResizeContainer>
		</>
	)
}
