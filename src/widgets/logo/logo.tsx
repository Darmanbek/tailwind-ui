import { type FC } from "react"
import { twx } from "src/shared/lib"

interface LogoProps {
	size?: "sm" | "md" | "lg"
}

const Logo: FC<LogoProps> = ({ size = "md" }) => {
	return (
		<>
			<div className={"shrink-0 flex gap-1 items-center"}>
				<img
					alt={"Logo"}
					src={"/mark.svg?color=indigo&shade=600"}
					className={twx({
						"size-6": size === "sm",
						"size-8": size === "md",
						"size-10": size === "lg"
					})}
				/>
				<span
					className={twx("font-semibold", {
						"text-sm": size === "sm",
						"text-md": size === "md",
						"text-lg": size === "lg"
					})}
				>
					tailwind<span className={"text-indigo-600"}>UI</span>
				</span>
			</div>
		</>
	)
}

export { Logo }
