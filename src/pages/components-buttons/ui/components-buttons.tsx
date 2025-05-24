import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"
import { Button, Card, Title } from "src/shared/ui"
import { Stack } from "src/widgets/stack"

const ComponentsButtons: FC = () => {
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
			<Card
				header={
					<div className={"flex gap-4 justify-between"}>
						<Title level={"h5"}>Default Buttons</Title>
					</div>
				}
			>
				<Stack>
					<Button size={"xs"}>Button XS</Button>
					<Button size={"sm"}>Button SM</Button>
					<Button size={"md"}>Button MD</Button>
					<Button size={"lg"}>Button LG</Button>
					<Button size={"xl"}>Button XL</Button>
				</Stack>
			</Card>
			<Card>
				<Stack>
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
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button size={"xs"} variant={"secondary"} shape={"rounded"}>
						Button XS
					</Button>
					<Button size={"sm"} variant={"secondary"} shape={"rounded"}>
						Button SM
					</Button>
					<Button size={"md"} variant={"secondary"} shape={"rounded"}>
						Button MD
					</Button>
					<Button size={"lg"} variant={"secondary"} shape={"rounded"}>
						Button LG
					</Button>
					<Button size={"xl"} variant={"secondary"} shape={"rounded"}>
						Button XL
					</Button>
				</Stack>
			</Card>
			<Card>
				<Stack>
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
				</Stack>
			</Card>
			<Card>
				<Stack>
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
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button size={"xs"} trailingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"sm"} trailingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"md"} trailingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"lg"} trailingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"xl"} trailingIcon={<CheckCircleIcon />}>
						Button
					</Button>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button size={"xs"} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"sm"} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"md"} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"lg"} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"xl"} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button size={"xs"} loading={true} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"sm"} loading={true} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"md"} loading={true} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"lg"} loading={true} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
					<Button size={"xl"} loading={true} leadingIcon={<CheckCircleIcon />}>
						Button
					</Button>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button size={"xs"} leadingIcon={<CheckCircleIcon />} />
					<Button size={"sm"} leadingIcon={<CheckCircleIcon />} />
					<Button size={"md"} leadingIcon={<CheckCircleIcon />} />
					<Button size={"lg"} leadingIcon={<CheckCircleIcon />} />
					<Button size={"xl"} leadingIcon={<CheckCircleIcon />} />
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button
						size={"xs"}
						shape={"circle"}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"sm"}
						shape={"circle"}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"md"}
						shape={"circle"}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"lg"}
						shape={"circle"}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"xl"}
						shape={"circle"}
						leadingIcon={<CheckCircleIcon />}
					/>
				</Stack>
			</Card>
			<Card>
				<Stack>
					<Button
						size={"xs"}
						shape={"circle"}
						loading={true}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"sm"}
						shape={"circle"}
						loading={true}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"md"}
						shape={"circle"}
						loading={true}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"lg"}
						shape={"circle"}
						loading={true}
						leadingIcon={<CheckCircleIcon />}
					/>
					<Button
						size={"xl"}
						shape={"circle"}
						loading={true}
						leadingIcon={<CheckCircleIcon />}
					/>
				</Stack>
			</Card>
		</>
	)
}

export { ComponentsButtons }
