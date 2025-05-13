import { type FC, useRef, useState } from "react"
import { Badges } from "./badges.tsx"
import { Buttons } from "./buttons.tsx"
// import { Categories } from "./categories.tsx"
// import { Features } from "./features.tsx"
// import { List } from "./list.tsx"
// import { Pagination } from "./pagination.tsx"
// import { ProductList } from "./product-list.tsx"

const Home: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState(600) // начальная ширина

	const startResize = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		const startX = e.clientX

		const onMouseMove = (moveEvent: MouseEvent) => {
			const newWidth = width + (moveEvent.clientX - startX)
			setWidth(Math.max(200, newWidth)) // минимальная ширина = 200px
		}

		const onMouseUp = () => {
			window.removeEventListener("mousemove", onMouseMove)
			window.removeEventListener("mouseup", onMouseUp)
		}

		window.addEventListener("mousemove", onMouseMove)
		window.addEventListener("mouseup", onMouseUp)
	}
	return (
		<>
			<div className={"flex flex-col gap-6"}>
				<Badges />
				<Buttons />
				{/*<List />*/}
				{/*<Pagination />*/}
				{/*<ProductList />*/}
				{/*<Categories />*/}
				{/*<Features />*/}
				<div className={"relative border rounded-lg shadow-sm p-4 mt-4"}>
					<div
						ref={containerRef}
						className={"bg-white rounded-lg"}
						style={{ width }}
					>
						<div className={"flex gap-2 p-4"}>
							{Array.from({ length: 10 }).map((_, i) => (
								<span
									key={i}
									className={
										"bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm whitespace-nowrap"
									}
								>
									Badge {i + 1}
								</span>
							))}
						</div>
					</div>
					<div
						onMouseDown={startResize}
						className={
							"absolute top-0 right-0 w-2 h-full cursor-ew-resize bg-transparent"
						}
					/>
				</div>
			</div>
		</>
	)
}

export { Home }
