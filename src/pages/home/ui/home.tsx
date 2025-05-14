import { type FC } from "react"
import { Logo } from "src/widgets/logo"
// import { Categories } from "./categories.tsx"
// import { Features } from "./features.tsx"
// import { List } from "./list.tsx"
// import { Pagination } from "./pagination.tsx"
// import { ProductList } from "./product-list.tsx"

const Home: FC = () => {
	return (
		<>
			<div className={"flex justify-center items-center flex-grow"}>
				<Logo size={"lg"} />
			</div>
			<div className={"flex flex-col gap-6"}>
				{/*<List />*/}
				{/*<Pagination />*/}
				{/*<ProductList />*/}
				{/*<Categories />*/}
				{/*<Features />*/}
			</div>
		</>
	)
}

export { Home }
