import { type FC } from "react"
import { Badges } from "./badges.tsx"
import { Categories } from "./categories.tsx"
import { Features } from "./features.tsx"
import { List } from "./list.tsx"
import { Pagination } from "./pagination.tsx"
import { ProductList } from "./product-list.tsx"

const Home: FC = () => {
	return (
		<>
			<div className={"flex flex-col gap-6"}>
				<Badges />
				<List />
				<Pagination />
				<ProductList />
				<Categories />
				<Features />
			</div>
		</>
	)
}

export { Home }
