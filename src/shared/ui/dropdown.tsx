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

export interface DropdownProps extends MenuProps {
	className?: string
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
	({ className, ...props }, ref) => {
		return (
			<Menu
				ref={ref}
				as={"div"}
				className={twx("relative inline-block text-left", className)}
				{...props}
			/>
		)
	}
)
Dropdown.displayName = "Dropdown"

interface DropdownButtonProps extends Omit<MenuButtonProps, "children"> {
	className?: string
	iconClassName?: string
	children?: ReactNode
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
	({ className, iconClassName, children, ...props }, ref) => (
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
					{children}
					<ChevronDownIcon
						aria-hidden={"true"}
						className={twx(
							"-mr-1 size-5 text-gray-400 transition-transform transform",
							{
								"rotate-180": open,
							},
							iconClassName
						)}
					/>
				</>
			)}
		</MenuButton>
	)
)
DropdownButton.displayName = "DropdownButton"

interface DropdownMenuItemsProps extends MenuItemsProps {
	className?: string
}

const DropdownMenuItems = forwardRef<HTMLElement, DropdownMenuItemsProps>(
	({ className, ...props }, ref) => (
		<MenuItems
			ref={ref}
			transition={true}
			className={twx(
				"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in",
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
		<MenuItem ref={ref} {...props}>
			<a
				href={href}
				className={twx(
					"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-focus:outline-hidden",
					className
				)}
			>
				{children}
			</a>
		</MenuItem>
	)
)
DropdownMenuItem.displayName = "DropdownMenuItem"

export { Dropdown, DropdownButton, DropdownMenuItems, DropdownMenuItem }
