import {
	CheckCircleIcon as CheckCircleOutlineIcon,
	XMarkIcon
} from "@heroicons/react/24/outline"
import { CheckCircleIcon as CheckCircleSolidIcon } from "@heroicons/react/24/solid"
import { createFileRoute } from "@tanstack/react-router"
import toast from "react-hot-toast"
import { twx } from "src/shared/lib"
import { Button, Card } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

export const Route = createFileRoute("/_layout/overlays/notifications")({
	component: RouteComponent
})

function RouteComponent() {
	const showNotification = () => {
		toast.custom((t) => (
			<div
				className={twx(
					"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent transition-all",
					{
						"animate-enter": t.visible,
						"animate-leave": !t.visible
					}
				)}
			>
				<div className={"p-4"}>
					<div className={"flex items-start"}>
						<div className={"shrink-0"}>
							<CheckCircleOutlineIcon className={"size-6 text-green-400"} />
						</div>
						<div className={"ml-3 w-0 flex-1 pt-0.5"}>
							<p className={"text-sm font-medium text-gray-900"}>
								Successfully saved!
							</p>
							<p className={"mt-1 text-sm text-gray-500"}>
								Anyone with a link can now view this file.
							</p>
						</div>
						<div className={"ml-4 flex shrink-0"}>
							<button
								type={"button"}
								onClick={() => toast.dismiss(t.id)}
								className={
									"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
								}
							>
								<span className={"sr-only"}>Close</span>
								<XMarkIcon aria-hidden={"true"} className={"size-5"} />
							</button>
						</div>
					</div>
				</div>
			</div>
		))
	}

	return (
		<Card>
			<Stack>
				<Button
					trailingIcon={<CheckCircleSolidIcon />}
					onClick={showNotification}
				>
					Success
				</Button>
			</Stack>
		</Card>
	)
}
