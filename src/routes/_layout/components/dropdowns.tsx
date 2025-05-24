import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/components/dropdowns")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/components/dropdowns"!</div>
}
