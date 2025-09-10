import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ComponentPropsWithRef } from "react"
import { twx } from "../lib"

export interface MediaProps extends ComponentPropsWithRef<"div"> {
	className?: string
	responsive?: boolean
	item?: boolean
}

const Media = forwardRef<HTMLDivElement, MediaProps>(
	({ className, responsive, item, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					responsive ? "sm:flex" : "flex",
					{
						"mt-6": item,
					},
					className
				)}
				data-media={""}
				{...props}
			/>
		)
	}
)
Media.displayName = "Media"

const mediaAvatarVariants = cva("shrink-0", {
	variants: {
		position: {
			left: "",
			right: "",
		},
		align: {
			start: "self-start",
			center: "self-center",
			end: "self-end",
			stretch: "self-stretch",
		},
		responsive: {
			true: "mb-4 sm:mb-0",
			false: "",
		},
	},
	compoundVariants: [
		{
			position: "left",
			responsive: false,
			className: "mr-4",
		},
		{
			position: "left",
			responsive: true,
			className: "sm:mr-4",
		},
		{
			position: "right",
			responsive: false,
			className: "ml-4",
		},
		{
			position: "right",
			responsive: true,
			className: "sm:ml-4",
		},
	],
	defaultVariants: {
		position: "left",
		align: "start",
		responsive: false,
	},
})

export interface MediaAvatarProps
	extends ComponentPropsWithRef<"div">,
		VariantProps<typeof mediaAvatarVariants> {
	className?: string
}

const MediaAvatar = forwardRef<HTMLDivElement, MediaAvatarProps>(
	({ className, position, align, responsive, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(
					mediaAvatarVariants({
						position,
						align,
						responsive,
						className,
					})
				)}
				data-media-avatar={""}
				{...props}
			/>
		)
	}
)
MediaAvatar.displayName = "MediaAvatar"

export interface MediaBodyProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const MediaBody = forwardRef<HTMLDivElement, MediaBodyProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twx(className)}
				data-media-body={""}
				{...props}
			/>
		)
	}
)
MediaBody.displayName = "MediaBody"

export interface MediaTitleProps extends ComponentPropsWithRef<"h4"> {
	className?: string
}

const MediaTitle = forwardRef<HTMLHeadingElement, MediaTitleProps>(
	({ className, ...props }, ref) => {
		return (
			<h4
				ref={ref}
				className={twx(
					"text-lg font-bold text-gray-900 dark:text-white",
					className
				)}
				data-media-title={""}
				{...props}
			/>
		)
	}
)
MediaTitle.displayName = "MediaTitle"

export interface MediaDescriptionProps extends ComponentPropsWithRef<"p"> {
	className?: string
}

const MediaDescription = forwardRef<
	HTMLParagraphElement,
	MediaDescriptionProps
>(({ className, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={twx("mt-1 text-gray-500 dark:text-gray-400", className)}
			data-media-description={""}
			{...props}
		/>
	)
})
MediaDescription.displayName = "MediaDescription"

export { Media, MediaAvatar, MediaBody, MediaDescription, MediaTitle }
