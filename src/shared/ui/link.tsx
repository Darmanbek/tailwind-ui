import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
// Your Navigation Link
import { Link as TanStackLink, type LinkProps as TanStackLinkProps } from "@tanstack/react-router"
import { twx } from "src/shared/lib"

export interface LinkProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "children">, TanStackLinkProps {

}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({className, ...props }, ref) => {
		return (
			<TanStackLink
				className={twx("font-semibold text-primary hover:text-primary-hover", className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Link.displayName = "Link"

export { Link }
