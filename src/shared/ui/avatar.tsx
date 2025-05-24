import { cva, type VariantProps } from "class-variance-authority"
import {
	type DetailedHTMLProps,
	forwardRef,
	type ImgHTMLAttributes,
	type ReactNode
} from "react"
import { twx } from "src/shared/lib"

const avatarVariants = cva("inline-block [&_svg]:size-full text-gray-300", {
	variants: {
		size: {
			xs: "size-6",
			sm: "size-8",
			md: "size-10",
			lg: "size-12",
			xl: "size-14"
		},
		rounded: {
			circle: "rounded-[100%]",
			square: "rounded-md"
		}
	}
})

export interface AvatarProps
	extends DetailedHTMLProps<
			ImgHTMLAttributes<HTMLImageElement>,
			HTMLImageElement
		>,
		VariantProps<typeof avatarVariants> {
	icon?: ReactNode
	title?: string
	description?: string
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
	(
		{
			icon,
			title,
			description,
			size,
			rounded = "circle",
			className,
			src,
			...props
		},
		ref
	) => {
		const imageAvatar = (
			<img
				ref={ref}
				alt={""}
				title={title || description}
				src={src}
				className={twx(
					avatarVariants({
						size,
						rounded,
						className
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
						rounded,
						className: twx("overflow-hidden bg-gray-100", className)
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

export { Avatar }
