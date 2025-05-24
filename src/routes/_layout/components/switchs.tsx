import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/components/switchs")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/components/switchs"!</div>
}
