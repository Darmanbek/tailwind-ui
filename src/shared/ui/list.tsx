import { forwardRef, type ComponentPropsWithRef } from "react"
import { twx } from "../lib"

export interface ListProps extends ComponentPropsWithRef<"ul"> {
	className?: string
	separate?: boolean
}

const List = forwardRef<HTMLUListElement, ListProps>(
	({ className, separate, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				className={twx(
					separate
						? "space-y-3"
						: "divide-y divide-gray-200 dark:divide-white/10",
					className
				)}
				role={"list"}
				{...props}
			/>
		)
	}
)
List.displayName = "List"

export interface ListItemProps extends ComponentPropsWithRef<"li"> {
	className?: string
	card?: boolean
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
	({ className, card, ...props }, ref) => {
		return (
			<li
				ref={ref}
				className={twx(
					"py-4",
					{
						"px-6": card,
					},
					className
				)}
				role={"listitem"}
				{...props}
			/>
		)
	}
)
ListItem.displayName = "ListItem"

export { List, ListItem }
