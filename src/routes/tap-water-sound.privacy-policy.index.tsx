import { createFileRoute } from "@tanstack/react-router"
import BathroomWaterPrivacyPolicyPage from "../features/bathroom-water.privacy-policy/page/BathroomWaterPrivacyPolicyPage"

export const Route = createFileRoute("/tap-water-sound/privacy-policy/")({
    component: BathroomWaterPrivacyPolicyPage,
})
