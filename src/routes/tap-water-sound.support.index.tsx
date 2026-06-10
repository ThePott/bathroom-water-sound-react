import { createFileRoute } from "@tanstack/react-router"
import BathroomWaterSupportPage from "../features/bathroom-water.support/page/BathroomWaterSupportPage"

export const Route = createFileRoute("/tap-water-sound/support/")({
    component: BathroomWaterSupportPage,
})
