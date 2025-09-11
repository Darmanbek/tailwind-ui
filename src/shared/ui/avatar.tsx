import { PhotoIcon } from "@heroicons/react/24/solid"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef, FC, ReactNode } from "react"
import { forwardRef, useState } from "react"
import { twx } from "src/shared/lib"

export interface AvatarProps extends VariantProps<typeof avatarImageVariants> {
	icon?: ReactNode
	title?: string
	description?: string
	initials?: string
	src?: string
	alt?: string
	className?: string
}

const Avatar: FC<AvatarProps> = ({
	icon,
	title,
	description,
	size,
	square,
	className,
	src,
	alt,
	group,
	initials,
}) => {
	const [error, setError] = useState(false)

	if (src && !error)
		return (
			<AvatarImage
				src={src}
				onError={() => setError(true)}
				square={square}
				size={size}
				alt={alt}
				group={group}
				className={className}
			/>
		)
	if (icon)
		return (
			<AvatarIcon className={className}>{icon || <PhotoIcon />}</AvatarIcon>
		)

	return <AvatarInitial className={className}>{initials}</AvatarInitial>
}

const avatarImageVariants = cva(
	"inline-block rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10",
	{
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
				true: "ring-2 ring-white dark:ring-gray-900",
				false: "",
			},
			isolate: {
				true: "relative z-30",
				false: "",
			},
		},
		defaultVariants: {
			size: "md",
			square: false,
		},
	}
)

export interface AvatarImageProps
	extends ComponentPropsWithRef<"img">,
		VariantProps<typeof avatarImageVariants> {
	className?: string
}

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
	({ className, src, size, square, isolate, ...props }, ref) => {
		return (
			<img
				ref={ref}
				alt={""}
				src={src}
				className={twx(
					avatarImageVariants({
						size,
						square,
						isolate,
						className,
					})
				)}
				{...props}
			/>
		)
	}
)
AvatarImage.displayName = "AvatarImage"

const avatarIconVariants = cva(
	"inline-block size-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 text-gray-300 dark:text-gray-600 *:data-[slot=icon]:size-full",
	{
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
				true: "ring-2 ring-white dark:ring-gray-900",
				false: "",
			},
		},
		defaultVariants: {
			size: "md",
			square: false,
		},
	}
)

export interface AvatarIconProps
	extends ComponentPropsWithRef<"span">,
		VariantProps<typeof avatarIconVariants> {
	className?: string
}

const AvatarIcon = forwardRef<HTMLSpanElement, AvatarIconProps>(
	({ className, size, square, children, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={twx(
					avatarIconVariants({
						size,
						square,
						className,
					})
				)}
				{...props}
			>
				{children}
			</span>
		)
	}
)
AvatarIcon.displayName = "AvatarIcon"

const avatarInitialVariants = cva(
	"inline-flex items-center justify-center bg-gray-500 dark:bg-gray-800 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10",
	{
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
				true: "ring-2 ring-white dark:ring-gray-900",
				false: "",
			},
		},
		defaultVariants: {
			size: "md",
			square: false,
		},
	}
)

export interface AvatarInitialProps
	extends ComponentPropsWithRef<"span">,
		VariantProps<typeof avatarIconVariants> {
	className?: string
}

const AvatarInitial = forwardRef<HTMLSpanElement, AvatarInitialProps>(
	({ className, size, square, children, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={twx(
					avatarInitialVariants({
						size,
						square,
						className,
					})
				)}
				{...props}
			>
				<span className={"text-xs font-medium text-white"}>{children}</span>
			</span>
		)
	}
)
AvatarInitial.displayName = "AvatarInitial"

const avatarGroupVariants = cva("flex items-center overflow-hidden", {
	variants: {
		size: {
			default: "-space-x-1",
			large: "-space-x-2",
		},
		isolate: {
			true: "isolate",
			false: "",
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
	({ className, size, isolate, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					avatarGroupVariants({
						size,
						isolate,
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
