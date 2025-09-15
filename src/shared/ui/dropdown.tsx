import {
	Menu,
	MenuButton,
	type MenuButtonProps,
	MenuItem,
	type MenuItemProps,
	MenuItems,
	type MenuItemsProps,
	type MenuProps,
} from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { forwardRef, type ReactNode } from "react"
import { twx } from "src/shared/lib"

export interface DropdownProps extends MenuProps<"div"> {
	className?: string
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
	({ className, ...props }, ref) => {
		return (
			<Menu
				ref={ref}
				as={"div"}
				className={twx("relative inline-block", className)}
				{...props}
			/>
		)
	}
)
Dropdown.displayName = "Dropdown"

interface DropdownButtonProps
	extends Omit<MenuButtonProps<"button">, "children"> {
	className?: string
	classNames?: {
		icon?: string
	}
	children?: ReactNode
	srOnly?: string
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
	({ className, classNames, children, srOnly, ...props }, ref) => (
		<MenuButton
			ref={ref}
			className={twx(
				"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50",
				className
			)}
			{...props}
		>
			{({ open }) => (
				<>
					{srOnly && <span className={"sr-only"}>{srOnly}</span>}
					{children}
					<ChevronDownIcon
						aria-hidden={"true"}
						className={twx(
							"-mr-1 size-5 text-gray-400 transition-transform transform",
							{
								"rotate-180": open,
							},
							classNames?.icon
						)}
					/>
				</>
			)}
		</MenuButton>
	)
)
DropdownButton.displayName = "DropdownButton"

interface DropdownIconButtonProps
	extends Omit<MenuButtonProps<"button">, "children"> {
	className?: string
	children?: ReactNode
	srOnly?: string
}

const DropdownIconButton = forwardRef<
	HTMLButtonElement,
	DropdownIconButtonProps
>(({ className, children, srOnly, ...props }, ref) => (
	<MenuButton
		ref={ref}
		as={"button"}
		className={twx(
			"flex items-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
			className
		)}
		{...props}
	>
		{srOnly && <span className={"sr-only"}>{srOnly}</span>}
		{children}
	</MenuButton>
))
DropdownIconButton.displayName = "DropdownIconButton"

interface DropdownMenuItemsProps extends MenuItemsProps {
	className?: string
}

const DropdownMenuItems = forwardRef<HTMLElement, DropdownMenuItemsProps>(
	({ className, ...props }, ref) => (
		<MenuItems
			ref={ref}
			transition={true}
			className={twx(
				"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 not-dark:shadow-lg outline-1 dark:-outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in",
				className
			)}
			{...props}
		/>
	)
)
DropdownMenuItems.displayName = "DropdownMenuItems"

interface DropdownMenuItemProps extends MenuItemProps {
	className?: string
	children?: ReactNode
	href?: string
}

const DropdownMenuItem = forwardRef<HTMLElement, DropdownMenuItemProps>(
	({ className, href, children, ...props }, ref) => (
		<MenuItem
			ref={ref}
			{...props}
		>
			<a
				href={href}
				className={twx(
					"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-white/5 data-focus:text-gray-900 dark:data-focus:text-white data-focus:outline-hidden",
					className
				)}
			>
				{children}
			</a>
		</MenuItem>
	)
)
DropdownMenuItem.displayName = "DropdownMenuItem"

export {
	Dropdown,
	DropdownButton,
	DropdownIconButton,
	DropdownMenuItem,
	DropdownMenuItems,
}
