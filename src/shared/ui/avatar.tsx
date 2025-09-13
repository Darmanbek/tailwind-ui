import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef, FC, ReactNode } from "react"
import { forwardRef, useState } from "react"
import { twx } from "src/shared/lib"
import { UserIcon } from "./icons"

const avatarVariants = cva(
	"outline -outline-offset-1 outline-black/5 dark:outline-white/10",
	{
		variants: {
			variant: {
				image: "",
				icon: "overflow-hidden",
				initial: "bg-gray-500 dark:bg-gray-800",
			},
			size: {
				xs: "size-6 text-xs",
				sm: "size-8 text-sm",
				md: "size-10 text-base",
				lg: "size-12 text-lg",
				xl: "size-14 text-xl",
				xxl: "size-16 text-2xl",
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
				true: "relative",
				false: "",
			},
			level: {
				1: "z-90",
				2: "z-80",
				3: "z-70",
				4: "z-60",
				5: "z-50",
				6: "z-40",
				7: "z-30",
				8: "z-20",
				9: "z-10",
				10: "z-0",
			},
		},
		compoundVariants: [
			{
				variant: ["image", "icon", "initial"],
				className: "inline-flex items-center justify-center",
			},
			{
				variant: ["image", "icon"],
				className:
					"bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600",
			},
			{
				variant: "initial",
				size: ["xs", "sm", "md", "lg", "xl", "xxl"],
				className: "font-medium text-white",
			},
		],
		defaultVariants: {
			size: "md",
			square: false,
		},
	}
)

export interface AvatarProps
	extends ComponentPropsWithRef<"span">,
		Omit<VariantProps<typeof avatarVariants>, "variant"> {
	icon?: ReactNode
	initials?: string
	src?: string
	alt?: string
	className?: string
	classNames?: {
		image?: string
		icon?: string
		initials?: string
	}
}

const Avatar: FC<AvatarProps> = ({
	icon,
	size,
	square,
	className,
	src,
	alt,
	group,
	initials,
	isolate,
	level,
	classNames,
}) => {
	const [error, setError] = useState(false)

	if (src && !error)
		return (
			<span className={twx("inline-block shrink-0", className)}>
				<img
					src={src}
					onError={() => setError(true)}
					onLoad={() => setError(false)}
					alt={alt}
					className={twx(
						avatarVariants({
							variant: "image",
							size,
							square,
							group,
							isolate,
							level,
							className: classNames?.image,
						})
					)}
					data-slot={"avatar"}
				/>
			</span>
		)

	if (initials)
		return (
			<span
				className={twx(
					avatarVariants({
						variant: "initial",
						size,
						square,
						group,
						isolate,
						level,
						className,
					})
				)}
				data-slot={"avatar"}
			>
				<span className={twx("font-medium text-white", classNames?.initials)}>
					{initials}
				</span>
			</span>
		)

	return (
		<span
			className={twx(
				avatarVariants({
					variant: "icon",
					size,
					square,
					group,
					isolate,
					level,
					className,
				})
			)}
			data-slot={"avatar"}
		>
			{icon || (
				<UserIcon
					className={twx(
						"size-full text-gray-300 dark:text-gray-600",
						classNames?.icon
					)}
				/>
			)}
		</span>
	)
}

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

export interface AvatarButtonProps extends ComponentPropsWithRef<"button"> {
	className?: string
}

const AvatarButton = forwardRef<HTMLButtonElement, AvatarButtonProps>(
	({ className, ...props }, ref) => {
		return (
			<button
				type={"button"}
				ref={ref}
				role={"button"}
				data-slot={"avatar-button"}
				className={twx("group block shrink-0", className)}
				{...props}
			/>
		)
	}
)
AvatarButton.displayName = "AvatarButton"

export interface AvatarLinkProps extends ComponentPropsWithRef<"a"> {
	className?: string
}

const AvatarLink = forwardRef<HTMLAnchorElement, AvatarLinkProps>(
	({ className, ...props }, ref) => {
		return (
			<a
				type={"button"}
				ref={ref}
				role={"link"}
				data-slot={"avatar-link"}
				className={twx("group block shrink-0", className)}
				{...props}
			/>
		)
	}
)
AvatarLink.displayName = "AvatarLink"

interface AvatarMetaProps
	extends ComponentPropsWithRef<"div">,
		Pick<AvatarProps, "size"> {
	className?: string
	avatar?: ReactNode
	title?: string
	description?: string
	classNames?: {
		avatar?: string
		body?: string
		title?: string
		description?: string
	}
}

const AvatarMeta = forwardRef<HTMLDivElement, AvatarMetaProps>(
	(
		{
			className,
			avatar,
			title,
			description,
			classNames,
			size = "md",
			...props
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				data-slot={"avatar-meta"}
				className={twx("flex items-center", className)}
				{...props}
			>
				<div className={twx(classNames?.avatar)}>{avatar}</div>
				<div className={twx("ml-3", classNames?.body)}>
					<h4
						className={twx(
							"text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white",
							{
								"text-xs": size === "sm",
								"text-sm": size === "md",
								"text-base": size === "lg",
								"text-lg": size === "xl",
								"text-xl": size === "xxl",
							},
							classNames?.title
						)}
					>
						{title}
					</h4>
					<p
						className={twx(
							"text-xs mt-1 font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300",
							{
								"text-xs": size === "md",
								"text-sm": size === "lg",
								"text-base": size === "xl",
								"text-lg": size === "xxl",
							},
							classNames?.description
						)}
					>
						{description}
					</p>
				</div>
			</div>
		)
	}
)
AvatarMeta.displayName = "AvatarMeta"

export { Avatar, AvatarButton, AvatarGroup, AvatarLink, AvatarMeta }
