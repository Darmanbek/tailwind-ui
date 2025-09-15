import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import {
	ArchiveBoxIcon,
	ArrowRightCircleIcon,
	ChevronDownIcon,
	DocumentDuplicateIcon,
	EllipsisVerticalIcon,
	HeartIcon,
	PencilSquareIcon,
	TrashIcon,
	UserPlusIcon,
} from "@heroicons/react/20/solid"
import { createFileRoute } from "@tanstack/react-router"

import { ResizeContainer } from "src/widgets/resize-container"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/elements/dropdowns")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResizeContainer
				title={"Simple"}
				className={"min-h-96"}
			>
				<Stack>
					<Menu
						as={"div"}
						className={"relative inline-block"}
					>
						<MenuButton
							className={
								"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white not-dark:shadow-xs inset-ring-1 inset-ring-gray-300 dark:inset-ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20"
							}
						>
							Options
							<ChevronDownIcon
								aria-hidden={"true"}
								className={"-mr-1 size-5 text-gray-400"}
							/>
						</MenuButton>

						<MenuItems
							transition={true}
							className={
								"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							}
						>
							<div className={"py-1"}>
								{["Account settings", "Support", "License"].map(
									(item, index) => (
										<MenuItem key={index}>
											<a
												href={"#"}
												className={
													"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
												}
											>
												{item}
											</a>
										</MenuItem>
									)
								)}
								<form
									action={"#"}
									method={"POST"}
								>
									<MenuItem>
										<button
											type={"submit"}
											className={
												"block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											Sign out
										</button>
									</MenuItem>
								</form>
							</div>
						</MenuItems>
					</Menu>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With dividers"}
				className={"min-h-96"}
			>
				<Stack>
					<Menu
						as={"div"}
						className={"relative inline-block"}
					>
						<MenuButton
							className={
								"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white not-dark:shadow-xs inset-ring-1 inset-ring-gray-300 dark:inset-ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20"
							}
						>
							Options
							<ChevronDownIcon
								aria-hidden={"true"}
								className={"-mr-1 size-5 text-gray-400"}
							/>
						</MenuButton>

						<MenuItems
							transition={true}
							className={
								"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-white/10 rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							}
						>
							<div className={"py-1"}>
								{["Edit", "Duplicate"].map((item, index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								{["Archive", "Move"].map((item, index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								{["Share", "Add to favorites"].map((item, index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								<MenuItem>
									<a
										href={"#"}
										className={
											"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
										}
									>
										Delete
									</a>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With icons"}
				className={"min-h-96"}
			>
				<Stack>
					<Menu
						as={"div"}
						className={"relative inline-block"}
					>
						<MenuButton
							className={
								"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white not-dark:shadow-xs inset-ring-1 inset-ring-gray-300 dark:inset-ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20"
							}
						>
							Options
							<ChevronDownIcon
								aria-hidden={"true"}
								className={"-mr-1 size-5 text-gray-400"}
							/>
						</MenuButton>

						<MenuItems
							transition={true}
							className={
								"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-white/10 rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							}
						>
							<div className={"py-1"}>
								{[
									[PencilSquareIcon, "Edit"] as const,
									[DocumentDuplicateIcon, "Duplicate"] as const,
								].map(([Icon, item], index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											<Icon
												className={
													"mr-3 size-5 text-gray-400 dark:text-gray-500 group-data-focus:text-gray-500 dark:group-data-focus:text-white"
												}
											/>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								{[
									[ArchiveBoxIcon, "Archive"] as const,
									[ArrowRightCircleIcon, "Move"] as const,
								].map(([Icon, item], index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											<Icon
												className={
													"mr-3 size-5 text-gray-400 dark:text-gray-500 group-data-focus:text-gray-500 dark:group-data-focus:text-white"
												}
											/>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								{[
									[UserPlusIcon, "Share"] as const,
									[HeartIcon, "Add to favorites"] as const,
								].map(([Icon, item], index) => (
									<MenuItem key={index}>
										<a
											href={"#"}
											className={
												"group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											<Icon
												className={
													"mr-3 size-5 text-gray-400 dark:text-gray-500 group-data-focus:text-gray-500 dark:group-data-focus:text-white"
												}
											/>
											{item}
										</a>
									</MenuItem>
								))}
							</div>
							<div className={"py-1"}>
								<MenuItem>
									<a
										href={"#"}
										className={
											"group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
										}
									>
										<TrashIcon
											className={
												"mr-3 size-5 text-gray-400 dark:text-gray-500 group-data-focus:text-gray-500 dark:group-data-focus:text-white"
											}
										/>
										Delete
									</a>
								</MenuItem>
							</div>
						</MenuItems>
					</Menu>
				</Stack>
			</ResizeContainer>

			<ResizeContainer
				title={"With minimal menu icon"}
				className={"min-h-96"}
			>
				<Stack>
					<Menu
						as={"div"}
						className={"relative inline-block"}
					>
						<MenuButton
							className={
								"flex items-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 tvz twa twc"
							}
						>
							<span className={"sr-only"}>Open options</span>
							<EllipsisVerticalIcon
								aria-hidden={"true"}
								className={"size-5"}
							/>
						</MenuButton>

						<MenuItems
							transition={true}
							className={
								"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							}
						>
							<div className={"py-1"}>
								{["Account settings", "Support", "License"].map(
									(item, index) => (
										<MenuItem key={index}>
											<a
												href={"#"}
												className={
													"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
												}
											>
												{item}
											</a>
										</MenuItem>
									)
								)}
								<form
									action={"#"}
									method={"POST"}
								>
									<MenuItem>
										<button
											type={"submit"}
											className={
												"block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											Sign out
										</button>
									</MenuItem>
								</form>
							</div>
						</MenuItems>
					</Menu>
				</Stack>
			</ResizeContainer>
			<ResizeContainer
				title={"With simple header"}
				className={"min-h-96"}
			>
				<Stack>
					<Menu
						as={"div"}
						className={"relative inline-block"}
					>
						<MenuButton
							className={
								"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white not-dark:shadow-xs inset-ring-1 inset-ring-gray-300 dark:inset-ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20"
							}
						>
							Options
							<ChevronDownIcon
								aria-hidden={"true"}
								className={"-mr-1 size-5 text-gray-400"}
							/>
						</MenuButton>

						<MenuItems
							transition={true}
							className={
								"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-white/10 rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							}
						>
							<div className={"px-4 py-3"}>
								<p className={"text-sm text-gray-700 dark:text-gray-400"}>
									Signed in as
								</p>
								<p
									className={
										"truncate text-sm font-medium text-gray-900 dark:text-white"
									}
								>
									tom@example.com
								</p>
							</div>
							<div className={"py-1"}>
								{["Account settings", "Support", "License"].map(
									(item, index) => (
										<MenuItem key={index}>
											<a
												href={"#"}
												className={
													"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
												}
											>
												{item}
											</a>
										</MenuItem>
									)
								)}
								<form
									action={"#"}
									method={"POST"}
								>
									<MenuItem>
										<button
											type={"submit"}
											className={
												"block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden"
											}
										>
											Sign out
										</button>
									</MenuItem>
								</form>
							</div>
						</MenuItems>
					</Menu>
				</Stack>
			</ResizeContainer>
		</>
	)
}
