import { type FC } from "react"
import { Button } from "src/shared/ui"

const Buttons: FC = () => {
	return (
		<>
			{/*<div className={"flex gap-4 justify-center items-center"}>*/}
			{/*	<Button>Button</Button>*/}
			{/*	<Button color={"red"}>Button</Button>*/}
			{/*	<Button color={"yellow"}>Button</Button>*/}
			{/*	<Button color={"green"}>Button</Button>*/}
			{/*	<Button color={"blue"}>Button</Button>*/}
			{/*	<Button color={"indigo"}>Button</Button>*/}
			{/*	<Button color={"purple"}>Button</Button>*/}
			{/*	<Button color={"pink"}>Button</Button>*/}
			{/*</div>*/}
			<div className={"flex gap-4 justify-center items-center"}>
				<Button size={"xs"}>Button XS</Button>
				<Button size={"sm"}>Button SM</Button>
				<Button size={"md"}>Button MD</Button>
				<Button size={"lg"}>Button LG</Button>
				<Button size={"xl"}>Button XL</Button>
			</div>
			<div className={"flex gap-4 justify-center items-center"}>
				<Button size={"xs"} shape={"rounded"}>
					Button XS
				</Button>
				<Button size={"sm"} shape={"rounded"}>
					Button SM
				</Button>
				<Button size={"md"} shape={"rounded"}>
					Button MD
				</Button>
				<Button size={"lg"} shape={"rounded"}>
					Button LG
				</Button>
				<Button size={"xl"} shape={"rounded"}>
					Button XL
				</Button>
			</div>
			<div className={"flex gap-4 justify-center items-center"}>
				<Button size={"xs"} variant={"secondary"}>
					Button
				</Button>
				<Button size={"sm"} variant={"secondary"}>
					Button
				</Button>
				<Button size={"md"} variant={"secondary"}>
					Button
				</Button>
				<Button size={"lg"} variant={"secondary"}>
					Button
				</Button>
				<Button size={"xl"} variant={"secondary"}>
					Button
				</Button>
			</div>
			<div className={"flex gap-4 justify-center items-center"}>
				<Button size={"xs"} variant={"soft"}>
					Button
				</Button>
				<Button size={"sm"} variant={"soft"}>
					Button
				</Button>
				<Button size={"md"} variant={"soft"}>
					Button
				</Button>
				<Button size={"lg"} variant={"soft"}>
					Button
				</Button>
				<Button size={"xl"} variant={"soft"}>
					Button
				</Button>
			</div>
		</>
	)
}

export { Buttons }
