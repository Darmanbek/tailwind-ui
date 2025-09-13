import { createFileRoute } from "@tanstack/react-router"
import { Badge } from "src/shared/ui"
import { XIcon } from "src/shared/ui/icons"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/badges")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"With border"}
				color={"white"}
			>
				<Stack size={"sm"}>
					<Badge>Badge</Badge>
					<Badge color={"red"}>Badge</Badge>
					<Badge color={"yellow"}>Badge</Badge>
					<Badge color={"green"}>Badge</Badge>
					<Badge color={"blue"}>Badge</Badge>
					<Badge color={"indigo"}>Badge</Badge>
					<Badge color={"purple"}>Badge</Badge>
					<Badge color={"pink"}>Badge</Badge>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With border and dot"}
				color={"white"}
			>
				<Stack size={"xs"}>
					<Badge
						dot={true}
						color={"default"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"red"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"yellow"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"green"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"blue"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"indigo"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"purple"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						color={"pink"}
					>
						Badge
					</Badge>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Pill with border"}
				color={"white"}
			>
				<Stack size={"sm"}>
					<Badge
						pill={true}
						color={"default"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"red"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"yellow"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"green"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"blue"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"indigo"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"purple"}
					>
						Badge
					</Badge>
					<Badge
						pill={true}
						color={"pink"}
					>
						Badge
					</Badge>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Pill with border and dot"}
				color={"white"}
			>
				<Stack size={"xs"}>
					<Badge
						dot={true}
						pill={true}
						color={"default"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"red"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"yellow"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"green"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"blue"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"indigo"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"purple"}
					>
						Badge
					</Badge>
					<Badge
						dot={true}
						pill={true}
						color={"pink"}
					>
						Badge
					</Badge>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With border and remove button"}
				color={"white"}
			>
				<Stack size={"xs"}>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-gray-50 dark:bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 inset-ring inset-ring-gray-500/10 dark:inset-ring-gray-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-gray-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-red-50 dark:bg-red-400/10 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 inset-ring inset-ring-red-600/10 dark:inset-ring-red-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-red-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-red-600/50 group-hover:stroke-red-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 inset-ring inset-ring-yellow-600/20 dark:inset-ring-yellow-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-yellow-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-yellow-600/50 group-hover:stroke-yellow-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 inset-ring inset-ring-green-600/20 dark:inset-ring-green-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-green-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-green-600/50 group-hover:stroke-green-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 inset-ring inset-ring-blue-700/10 dark:inset-ring-blue-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-blue-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-blue-600/50 group-hover:stroke-blue-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 inset-ring inset-ring-indigo-700/10 dark:inset-ring-indigo-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-indigo-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-indigo-600/50 group-hover:stroke-indigo-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-purple-50 dark:bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400 inset-ring inset-ring-purple-700/10 dark:inset-ring-purple-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-purple-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-purple-600/50 group-hover:stroke-purple-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
					<span
						className={
							"inline-flex items-center gap-x-0.5 rounded-md bg-pink-50 dark:bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-700 dark:text-pink-400 inset-ring inset-ring-pink-700/10 dark:inset-ring-pink-400/20"
						}
					>
						Badge
						<button
							className={
								"group relative -mr-1 size-3.5 rounded-xs hover:bg-pink-500/20"
							}
							type={"button"}
						>
							<span className={"sr-only"}>Remove</span>
							<XIcon
								className={
									"size-3.5 stroke-pink-600/50 group-hover:stroke-pink-600/75"
								}
							/>
							<span className={"absolute -inset-1"}></span>
						</button>
					</span>
				</Stack>
			</ResizeContainer>
		</>
	)
}
