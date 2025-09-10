import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef, ReactNode } from "react"
import { forwardRef } from "react"
import { twx } from "src/shared/lib"

const avatarVariants = cva("inline-block text-gray-300 dark:text-gray-600", {
	variants: {
		size: {
			xs: "size-6",
			sm: "size-8",
			md: "size-10",
			lg: "size-12",
			xl: "size-14",
		},
		square: {
			true: "rounded-md",
			false: "rounded-full",
		},
		group: {
			true: "ring-2 ring-white dark:ring-gray-900 outline -outline-offset-1 outline-black/5 dark:outline-white/10",
			false: "",
		},
	},
	defaultVariants: {
		size: "md",
		square: false,
		group: false,
	},
})

export interface AvatarProps
	extends ComponentPropsWithRef<"img">,
		VariantProps<typeof avatarVariants> {
	icon?: ReactNode
	title?: string
	description?: string
	initials?: string
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
	(
		{ icon, title, description, size, square, className, src, group, ...props },
		ref
	) => {
		const imageAvatar = (
			<img
				ref={ref}
				alt={""}
				title={title || description}
				aria-description={description}
				src={src}
				className={twx(
					avatarVariants({
						size,
						square,
						group,
						className,
					})
				)}
				{...props}
			/>
		)

		const iconAvatar = (
			<span
				className={twx(
					avatarVariants({
						size,
						square,
						className: twx(
							"overflow-hidden bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10",
							className
						),
					})
				)}
			>
				{icon}
			</span>
		)

		return src ? imageAvatar : iconAvatar
	}
)
Avatar.displayName = "Avatar"

const avatarGroupVariants = cva("flex items-center overflow-hidden", {
	variants: {
		size: {
			default: "-space-x-1",
			large: "-space-x-2",
		},
	},
	defaultVariants: {
		size: "default",
	},
})

export interface AvatarGroupProps
	extends ComponentPropsWithRef<"div">,
		VariantProps<typeof avatarGroupVariants> {
	className?: string
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
	({ className, size, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					avatarGroupVariants({
						size,
						className,
					})
				)}
				{...props}
			/>
		)
	}
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }
