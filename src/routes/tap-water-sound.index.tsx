import { createFileRoute } from "@tanstack/react-router"
import BathroomWaterPage from "../features/bathroom-water/page/BathroomWaterPage"

export const Route = createFileRoute("/tap-water-sound/")({
    component: BathroomWaterPage,
})
