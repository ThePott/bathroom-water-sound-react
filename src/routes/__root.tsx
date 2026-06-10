import { createRootRoute } from "@tanstack/react-router"
import RootLayout from "../features/__root/layout/RootLayout"

export const Route = createRootRoute({
    component: RootLayout,
})
