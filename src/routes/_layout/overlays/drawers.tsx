import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	TransitionChild
} from "@headlessui/react"
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Button, Card, Placeholder } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/overlays/drawers")({
	component: RouteComponent
})

function RouteComponent() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Card>
				<Stack>
					<Button onClick={() => setOpen(true)} trailingIcon={<EyeIcon />}>
						Open Drawer
					</Button>
				</Stack>
			</Card>
			<Dialog open={open} onClose={setOpen} className={"relative z-10"}>
				<DialogBackdrop
					transition={true}
					className={
						"fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
					}
				/>

				<div className={"fixed inset-0 overflow-hidden"}>
					<div className={"absolute inset-0 overflow-hidden"}>
						<div
							className={
								"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
							}
						>
							<DialogPanel
								transition={true}
								className={
									"pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
								}
							>
								<TransitionChild>
									<div
										className={
											"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4"
										}
									>
										<button
											type={"button"}
											onClick={() => setOpen(false)}
											className={
												"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											}
										>
											<span className={"absolute -inset-2.5"} />
											<span className={"sr-only"}>Close panel</span>
											<XMarkIcon aria-hidden={"true"} className={"size-6"} />
										</button>
									</div>
								</TransitionChild>
								<div
									className={
										"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
									}
								>
									<div className={"px-4 sm:px-6"}>
										<DialogTitle
											className={"text-base font-semibold text-gray-900"}
										>
											Panel title
										</DialogTitle>
									</div>
									<div className={"relative mt-6 flex-1 px-4 sm:px-6"}>
										<Placeholder />
									</div>
								</div>
							</DialogPanel>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	)
}
