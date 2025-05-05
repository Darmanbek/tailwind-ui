import { useNavigate } from "@tanstack/react-router"
import { type FC, type FormEventHandler } from "react"
import { Button, Form, FormItem, Input, Link, Text, Title } from "src/shared/ui"

const Login: FC = () => {
	const navigate = useNavigate()
	
	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		navigate({
			to: "/"
		})
	}
	
	return (
		<>
			<div
				className={
					"flex min-h-screen flex-1 flex-col bg-background justify-center px-6 py-12 lg:px-8"
				}
			>
				<div className={"sm:mx-auto sm:w-full sm:max-w-sm"}>
					<img
						alt={"Your Company"}
						src={"/mark.svg?color=indigo&shade=600"}
						className={"mx-auto h-10 w-auto"}
					/>
					<Title
						level={"h2"}
						className={
							"mt-10 text-center text-2xl/9"
						}
					>
						Sign in to your account
					</Title>
				</div>
				
				<div className={"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"}>
					<Form
						onSubmit={onSubmit}
					>
						<FormItem
							label={"Email address"}
							name={"email"}
						>
							<Input
								name={"email"}
								type={"email"}
								required={true}
							/>
						</FormItem>
						<FormItem
							name={"password"}
							label={"Password"}
							extra={(
								<Link
									href={"#"}
								>
									Forgot password?
								</Link>
							)}
						>
							<Input
								name={"password"}
								type={"password"}
								required={true}
							/>
						</FormItem>
						<div>
							<Button type={"submit"} className={"w-full"}>
								Sign in
							</Button>
						</div>
					</Form>
					
					<Text className={"mt-10 text-center text-sm/6"}>
						Not a member?{" "}
						<Link
							href={"#"}
						>
							Start a 14 day free trial
						</Link>
					</Text>
				</div>
			</div>
		</>
	)
}

export { Login }
