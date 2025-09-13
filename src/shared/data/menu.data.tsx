import { Squares2X2Icon } from "@heroicons/react/24/outline"
import type { ReactNode } from "react"

export type MenuItem = {
	name: string
	Icon?: typeof Squares2X2Icon
	href: string
	extra?: ReactNode
}

export type MenuGroupItem = MenuItem & {
	children: MenuItem[]
}

export const menuData: MenuGroupItem[] = [
	{
		name: "Application Shells",
		href: "/application-shells",
		children: [
			{
				name: "Stacked Layouts",
				href: "/application-shells/stacked-layouts",
			},
			{
				name: "Sidebar Layouts",
				href: "/application-shells/sidebar-layouts",
			},
			{
				name: "Multi-Column Layouts",
				href: "/application-shells/multi-column-layouts",
			},
		],
	},
	{
		name: "Headings",
		href: "/headings",
		children: [
			{
				name: "Page Headings",
				href: "/headings/page-headings",
			},
			{
				name: "Card Headings",
				href: "/headings/card-headings",
			},
			{
				name: "Section Headings",
				href: "/headings/section-headings",
			},
		],
	},
	{
		name: "Data Display",
		href: "/data-display",
		children: [
			{
				name: "Description Lists",
				href: "/data-display/description-lists",
			},
			{
				name: "Stats",
				href: "/data-display/stats",
			},
			{
				name: "Calendars",
				href: "/data-display/calendars",
			},
		],
	},
	{
		name: "Lists",
		href: "/lists",
		children: [
			{
				name: "Stacked Lists",
				href: "/lists/stacked-lists",
			},
			{
				name: "Tables",
				href: "/lists/tables",
			},
			{
				name: "Grid Lists",
				href: "/lists/grid-lists",
			},
			{
				name: "Feeds",
				href: "/lists/feeds",
			},
		],
	},
	{
		name: "Forms",
		href: "/forms",
		children: [
			{
				name: "Form Layouts",
				href: "/forms/form-layouts",
			},
			{
				name: "Input Groups",
				href: "/forms/input-groups",
			},
			{
				name: "Select Menus",
				href: "/forms/select-menus",
			},
			{
				name: "Textareas",
				href: "/forms/textareas",
			},
			{
				name: "Radio Groups",
				href: "/forms/radio-groups",
			},
			{
				name: "Checkboxes",
				href: "/forms/checkboxes",
			},
			{
				name: "Toggles",
				href: "/forms/toggles",
			},
			{
				name: "Action Panels",
				href: "/forms/action-panels",
			},
			{
				name: "Comboboxes",
				href: "/forms/comboboxes",
			},
		],
	},
	{
		name: "Feedback",
		href: "/feedback",
		children: [
			{
				name: "Alerts",
				href: "/feedback/alerts",
				extra: "1",
			},
			{
				name: "Empty States",
				href: "/feedback/empty-states",
				extra: "1",
			},
		],
	},
	{
		name: "Navigation",
		href: "/navigation",
		children: [
			{
				name: "Navbars",
				href: "/navigation/navbars",
			},
			{
				name: "Pagination",
				href: "/navigation/pagination",
			},
			{
				name: "Tabs",
				href: "/navigation/tabs",
			},
			{
				name: "Vertical Navigation",
				href: "/navigation/vertical-navigation",
			},
			{
				name: "Sidebar Navigation",
				href: "/navigation/sidebar-navigation",
			},
			{
				name: "Breadcrumbs",
				href: "/navigation/breadcrumbs",
			},
			{
				name: "Progress Bars",
				href: "/navigation/progress-bars",
			},
			{
				name: "Command Palettes",
				href: "/navigation/command-palettes",
			},
		],
	},
	{
		name: "Overlays",
		href: "/overlays",
		children: [
			{
				name: "Modal Dialogs",
				href: "/overlays/modal-dialogs",
				extra: "1",
			},
			{
				name: "Drawers",
				href: "/overlays/drawers",
				extra: "1",
			},
			{
				name: "Notifications",
				href: "/overlays/notifications",
				extra: "1",
			},
		],
	},
	{
		name: "Elements",
		href: "/elements",
		children: [
			{
				name: "Avatars",
				Icon: Squares2X2Icon,
				href: "/elements/avatars",
				extra: "11",
			},
			{
				name: "Badges",
				Icon: Squares2X2Icon,
				href: "/elements/badges",
				extra: "1",
			},
			{
				name: "Dropdowns",
				Icon: Squares2X2Icon,
				href: "/elements/dropdowns",
				extra: "5",
			},
			{
				name: "Buttons",
				Icon: Squares2X2Icon,
				href: "/elements/buttons",
				extra: "11",
			},
			{
				name: "Button Groups",
				Icon: Squares2X2Icon,
				href: "/elements/button-groups",
				extra: "2",
			},
			{
				name: "Inputs",
				Icon: Squares2X2Icon,
				href: "/elements/inputs",
				extra: "1",
			},
			{
				name: "TextAreas",
				Icon: Squares2X2Icon,
				href: "/elements/textareas",
				extra: "1",
			},
			{
				name: "Selects",
				Icon: Squares2X2Icon,
				href: "/elements/selects",
				extra: "1",
			},
			{
				name: "Select Menus",
				Icon: Squares2X2Icon,
				href: "/elements/select-menus",
				extra: "1",
			},

			{
				name: "Switchs",
				Icon: Squares2X2Icon,
				href: "/elements/switchs",
				extra: "1",
			},
		],
	},
	{
		name: "Layout",
		href: "/layout",
		children: [
			{
				name: "Containers",
				href: "/layout/containers",
				extra: "5",
			},
			{
				name: "Cards",
				href: "/layout/cards",
				extra: "10",
			},
			{
				name: "List containers",
				href: "/layout/list-containers",
				extra: "7",
			},
			{
				name: "Media Objects",
				href: "/layout/media-objects",
				extra: "8",
			},
			{
				name: "Dividers",
				href: "/layout/dividers",
				extra: "8",
			},
		],
	},
	{
		name: "Page Examples",
		href: "/page-examples",
		children: [
			{
				name: "Login Page",
				href: "/login",
			},
		],
	},
]
