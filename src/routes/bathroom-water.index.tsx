import { createFileRoute } from "@tanstack/react-router"
import BathroomWaterPage from "../features/bathroom-water/page/BathroomWaterPage"

export const Route = createFileRoute("/bathroom-water/")({
    component: BathroomWaterPage,
})
