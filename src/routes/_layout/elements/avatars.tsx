import { UserIcon } from "@heroicons/react/24/solid"
import { createFileRoute } from "@tanstack/react-router"
import { AvatarGroup } from "src/shared/ui"
import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/avatars")({
	component: RouteComponent,
})

const url =
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Avatar group stacked bottom to top"}
				color={"white"}
				className={"dark"}
			>
				<Stack>
					<AvatarGroup>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"inline-block size-6 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup size={"large"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"inline-block size-10 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars"}
				color={"white"}
				className={"dark"}
			>
				<Stack>
					<img
						className={
							"inline-block size-6 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-8 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-10 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-12 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-14 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars"}
				color={"white"}
			>
				<Stack>
					<img
						className={
							"inline-block size-6 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-8 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-10 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-12 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
					<img
						className={
							"inline-block size-14 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
						src={url}
						alt={""}
					/>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with top notification"}
				className={"dark"}
				color={"white"}
			>
				<Stack>
					<span className={"relative inline-block"}>
						<img
							className={
								"size-6 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-1.5 rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-8 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-2 rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-10 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-2.5 rounded-full bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-12 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-3 rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-14 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-3.5 rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-16 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-4 rounded-full  bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars with top notification"}
				color={"white"}
			>
				<Stack>
					<span className={"relative inline-block"}>
						<img
							className={
								"size-6 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-1.5 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-8 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-2 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-10 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-2.5 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-12 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-3 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-14 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-3.5 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-16 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute top-0 right-0 block size-4 translate-x-1/2 -translate-y-1/2 transform rounded-full  bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with bottom notification"}
				className={"dark"}
				color={"white"}
			>
				<Stack>
					<span className={"relative inline-block"}>
						<img
							className={
								"size-6 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-1.5 rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-8 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-2 rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-10 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-2.5 rounded-full bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-12 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-3 rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-14 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-3.5 rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-16 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-4 rounded-full  bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Rounded avatars with bottom notification"}
				color={"white"}
			>
				<Stack>
					<span className={"relative inline-block"}>
						<img
							className={
								"size-6 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-1.5 translate-x-1/2 translate-y-1/2 transform rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-8 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-2 translate-x-1/2 translate-y-1/2 transform rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-10 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-2.5 translate-x-1/2 translate-y-1/2 transform rounded-full bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-12 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-3 translate-x-1/2 translate-y-1/2 transform rounded-full bg-gray-300 dark:bg-gray-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-14 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-3.5 translate-x-1/2 translate-y-1/2 transform rounded-full bg-red-400 dark:bg-red-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
					{/* - - - */}
					<span className={"relative inline-block"}>
						<img
							className={
								"size-16 rounded-md outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
							}
							src={url}
							alt={""}
						/>
						<span
							className={
								"absolute bottom-0 right-0 block size-4 translate-x-1/2 translate-y-1/2 transform rounded-full  bg-green-400 dark:bg-green-500 ring-2 ring-white dark:ring-gray-900"
							}
						></span>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder icon"}
				color={"white"}
				className={"dark"}
			>
				<Stack>
					<span
						className={
							"inline-block size-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<UserIcon
							className={"size-full text-gray-300 dark:text-gray-600"}
						/>
					</span>
					<span
						className={
							"inline-block size-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<UserIcon
							className={"size-full text-gray-300 dark:text-gray-600"}
						/>
					</span>
					<span
						className={
							"inline-block size-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<UserIcon
							className={"size-full text-gray-300 dark:text-gray-600"}
						/>
					</span>
					<span
						className={
							"inline-block size-12 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<UserIcon
							className={"size-full text-gray-300 dark:text-gray-600"}
						/>
					</span>
					<span
						className={
							"inline-block size-14 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<UserIcon
							className={"size-full text-gray-300 dark:text-gray-600"}
						/>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Circular avatars with placeholder initials"}
				color={"white"}
			>
				<Stack>
					<span
						className={
							"inline-flex size-6 items-center justify-center rounded-full bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<span className={"text-xs font-medium text-white"}>TW</span>
					</span>
					<span
						className={
							"inline-flex size-8 items-center justify-center rounded-full bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<span className={"text-sm font-medium text-white"}>TW</span>
					</span>
					<span
						className={
							"inline-flex size-10 items-center justify-center rounded-full bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<span className={"text-base font-medium text-white"}>TW</span>
					</span>
					<span
						className={
							"inline-flex size-12 items-center justify-center rounded-full bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<span className={"text-lg font-medium text-white"}>TW</span>
					</span>
					<span
						className={
							"inline-flex size-14 items-center justify-center rounded-full bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
						}
					>
						<span className={"text-xl font-medium text-white"}>TW</span>
					</span>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"Avatar group stacked top to bottom"}
				color={"white"}
			>
				<Stack>
					<AvatarGroup className={"isolate flex -space-x-1 overflow-hidden"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"relative z-30 inline-block size-6 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup className={"isolate flex -space-x-1 overflow-hidden"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"relative z-30 inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
					<AvatarGroup className={"isolate flex -space-x-1 overflow-hidden"}>
						{Array.from({ length: 4 }, (_v, index) => (
							<img
								src={url}
								alt={""}
								key={index}
								className={
									"relative z-30 inline-block size-10 rounded-full ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10"
								}
							/>
						))}
					</AvatarGroup>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With text"}
				color={"white"}
			>
				<Stack>
					<a
						href={"#"}
						className={"group block shrink-0"}
					>
						<div className={"flex items-center"}>
							<div>
								<img
									src={url}
									alt={""}
									className={
										"inline-block size-9 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10"
									}
								/>
							</div>
							<div className={"ml-3"}>
								<p
									className={
										"text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white"
									}
								>
									Tom Cook
								</p>
								<p
									className={
										"text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white"
									}
								>
									View profile
								</p>
							</div>
						</div>
					</a>
				</Stack>
			</ResizeContainer>
		</>
	)
}
