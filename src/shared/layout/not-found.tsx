import { ArrowRightIcon } from "@heroicons/react/16/solid"
import {
	type NotFoundRouteProps,
	rootRouteId,
	useMatch
} from "@tanstack/react-router"
import { type FC, type ReactNode } from "react"
import { twx } from "src/shared/lib/twx.ts"
import { Text, Title } from "src/shared/ui"

const NotFound: FC<NotFoundRouteProps> = ({ data }) => {
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId
	})

	const children = data as ReactNode
	return (
		<>
			<main
				className={twx(
					"grid min-h-full flex-grow place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8",
					{
						"min-h-screen": isRoot
					}
				)}
			>
				<div className={"text-center"}>
					<Text className={"text-base font-semibold text-primary"}>404</Text>
					<Title
						className={
							"mt-4 text-balance text-5xl font-semibold sm:text-7xl"
						}
					>
						Page not found
					</Title>
					<Text
						type={"secondary"}
						className={
							"mt-6 text-pretty text-lg font-medium sm:text-xl/8"
						}
					>
						Sorry, we couldn’t find the page you’re looking for.
						{children && <pre>{JSON.stringify(children, null, 2)}</pre>}
					</Text>
					<div className={"mt-10 flex items-center justify-center gap-x-6"}>
						<a
							href={"#"}
							className={
								"rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							}
						>
							Go back home
						</a>
						<a href={"#"} className={"text-sm flex gap-1 items-center group font-semibold transition-transform text-foreground"}>
							Contact support <ArrowRightIcon className={"size-4 group-hover:translate-x-1"} />
						</a>
					</div>
				</div>
			</main>
		</>
	)
}

export { NotFound }
