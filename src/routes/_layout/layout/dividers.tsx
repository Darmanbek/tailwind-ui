import { PlusIcon } from "@heroicons/react/20/solid"
import { createFileRoute } from "@tanstack/react-router"
import { Divider, DividerBody, DividerLine } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"

export const Route = createFileRoute("/_layout/layout/dividers")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Basic Divider"}
				color={"white"}
			>
				<Divider />
			</ResizeContainer>
			<ResizeContainer
				title={"With label"}
				color={"white"}
			>
				<Divider>
					<DividerLine />
					<DividerBody>
						<span
							className={
								"bg-white dark:bg-gray-900 px-2 text-sm text-gray-500 dark:text-gray-400"
							}
						>
							Continue
						</span>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With icon"}
				color={"white"}
			>
				<Divider>
					<DividerLine />
					<DividerBody>
						<span
							className={
								"bg-white dark:bg-gray-900 px-2 text-sm text-gray-500 dark:text-gray-400"
							}
						>
							<PlusIcon className={"size-5"} />
						</span>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With label on left"}
				color={"white"}
				className={"dark"}
			>
				<Divider>
					<DividerBody>
						<span
							className={
								"bg-white dark:bg-gray-900 px-2 text-sm text-gray-500 dark:text-gray-400"
							}
						>
							Continue
						</span>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With title"}
				color={"white"}
			>
				<Divider>
					<DividerLine />
					<DividerBody>
						<span
							className={
								"bg-white dark:bg-gray-900 px-3 text-base font-semibold text-gray-900 dark:text-white"
							}
						>
							Projects
						</span>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With title on left"}
				color={"white"}
				className={"dark"}
			>
				<Divider>
					<DividerBody className={"relative flex justify-center"}>
						<span
							className={
								"bg-white dark:bg-gray-900 px-3 text-base font-semibold text-gray-900 dark:text-white"
							}
						>
							Projects
						</span>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With button"}
				color={"white"}
			>
				<Divider>
					<DividerLine />
					<DividerBody>
						<button
							className={
								"inline-flex items-center gap-x-1.5 rounded-full bg-white dark:bg-white/10 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-white not-dark:shadow-xs inset-shadow-[0_0_0_1px] inset-shadow-gray-300 dark:inset-shadow-white/5 hover:bg-gray-50 dark:hover:bg-white/20 cursor-pointer"
							}
							type={"button"}
						>
							<PlusIcon className={"-mr-0.5 -ml-1 size-5 text-gray-400"} />
							Button text
						</button>
					</DividerBody>
					<DividerLine />
				</Divider>
			</ResizeContainer>
			<ResizeContainer
				title={"With title and button"}
				color={"white"}
				className={"dark"}
			>
				<Divider className={"relative flex items-center justify-between"}>
					<DividerBody>
						<span
							className={
								"bg-white dark:bg-gray-900 pr-3 text-base font-semibold text-gray-900 dark:text-white"
							}
						>
							Projects
						</span>
					</DividerBody>
					<DividerLine />
					<DividerBody>
						<button
							className={
								"inline-flex items-center gap-x-1.5 rounded-full bg-white dark:bg-white/10 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-white not-dark:shadow-xs inset-shadow-[0_0_0_1px] inset-shadow-gray-300 dark:inset-shadow-white/5 hover:bg-gray-50 dark:hover:bg-white/20 cursor-pointer"
							}
							type={"button"}
						>
							<PlusIcon className={"-mr-0.5 -ml-1 size-5 text-gray-400"} />
							Button text
						</button>
					</DividerBody>
				</Divider>
			</ResizeContainer>
			{/* <ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={<PlusIcon className={"size-5"} />}
				/>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={"Continue"}
					position={"start"}
				/>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					level={"title"}
					label={"Projects"}
				/>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					level={"title"}
					label={"Projects"}
					position={"start"}
				/>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					position={"center"}
					extra={
						<Button
							variant={"secondary"}
							shape={"rounded"}
							trailingIcon={<PlusIcon />}
						>
							Button
						</Button>
					}
				/>
			</ResizeContainer>
			<ResizeContainer color={"white"}>
				<Divider
					className={"max-w-3xl w-full"}
					label={"Projects"}
					level={"title"}
					extra={
						<Button
							variant={"secondary"}
							shape={"rounded"}
							trailingIcon={<PlusIcon />}
						>
							Button
						</Button>
					}
				/>
			</ResizeContainer> */}
		</>
	)
}
