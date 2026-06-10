import { createFileRoute } from "@tanstack/react-router"
import BathroomWaterSupportPage from "../features/bathroom-water.support/page/BathroomWaterSupportPage"

export const Route = createFileRoute("/bathroom-water/support/")({
    component: BathroomWaterSupportPage,
})
