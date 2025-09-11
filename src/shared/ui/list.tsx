import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
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

const listItemVariants = cva("py-4", {
	variants: {
		variant: {
			card: "overflow-hidden bg-white dark:bg-gray-800 not-dark:shadow dark:outline-1 -outline-offset-1 outline-white/10 px-6",
		},
		card: {
			true: "px-6",
			false: "",
		},
		edgeToEdge: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		{
			variant: "card",
			edgeToEdge: false,
			className: "rounded-lg",
		},
		{
			variant: "card",
			edgeToEdge: true,
			className: "sm:rounded-lg",
		},
	],
	defaultVariants: {
		card: false,
		edgeToEdge: false,
	},
})

export interface ListItemProps
	extends ComponentPropsWithRef<"li">,
		VariantProps<typeof listItemVariants> {
	className?: string
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
	({ className, card, variant, edgeToEdge, ...props }, ref) => {
		return (
			<li
				ref={ref}
				className={twx(
					listItemVariants({
						variant,
						card,
						edgeToEdge,
						className,
					})
				)}
				role={"listitem"}
				{...props}
			/>
		)
	}
)
ListItem.displayName = "ListItem"

export { List, ListItem }
