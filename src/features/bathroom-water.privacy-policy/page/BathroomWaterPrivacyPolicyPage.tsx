import { checkIsKorean } from "../../../shared/utiles/detect-language"

export const translations = {
    "app.title": {
        ko: "화장실 물소리",
        en: "Bathroom Water",
    },
    "privacy.title": {
        ko: "개인정보 처리 방침",
        en: "Privacy Policy",
    },
    "privacy.description": {
        ko: "(이하 '앱')는 개인정보를 일절 수집하지 않습니다.",
        en: "(hereinafter 'this app') does not collect any personal information.",
    },
    "privacy.collected.title": {
        ko: "수집하는 정보",
        en: "Collected Information",
    },
    "privacy.collected.description": {
        ko: "이 앱은 어떤 개인정보도 수집, 저장, 공유하지 않습니다.",
        en: "This app does not collect, store, or share any personal information.",
    },
    "privacy.thirdParty.title": {
        ko: "제3자 서비스",
        en: "Third Party Services",
    },
    "privacy.thirdParty.description": {
        ko: "이 앱은 제3자 분석 도구나 광고 네트워크를 사용하지 않습니다.",
        en: "This app does not use third-party analytics or advertising networks.",
    },
    "privacy.contact": {
        ko: "문의",
        en: "Contact",
    },
} as const

const BathroomWaterPrivacyPolicyPage = () => {
    const isKorean = checkIsKorean()
    const translate = (key: keyof typeof translations): string => {
        return translations[key][isKorean ? "ko" : "en"]
    }

    return (
        <div
            title="fullscreen"
            className="min-h-screen max-h-screen w-screen flex justify-center items-center overflow-auto scrollbar-gutter-auto bg-[EAEAEA]"
        >
            <div
                title="container"
                className="w-[600px] h-full mx-auto bg-[EAEAEA] p-[48px] rounded-[48px] text-center shadow-2xl border-t-2 border-t-white"
            >
                <div title="vstack" className="flex flex-col">
                    <h1 className="text-[24px] font-semibold pb-[12px]">{translate("app.title")}</h1>
                    <h2 className="font-semibold pb-[24px]">{translate("privacy.title")}</h2>
                    <h3 className="pb-[24px]">
                        <span className="font-semibold">{translate("app.title")}</span>
                        {translate("privacy.description")}
                    </h3>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-semibold">{translate("privacy.collected.title")}</h3>
                        <p className="pl-[16px]">{translate("privacy.collected.description")}</p>
                        <h3 className="font-semibold pt-[12px]">{translate("privacy.thirdParty.title")}</h3>
                        <p className="pl-[16px]">{translate("privacy.thirdParty.description")}</p>
                        <h3 className="font-semibold pt-[12px]">{translate("privacy.contact")}</h3>
                        <p className="pl-[16px]">nutilite@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BathroomWaterPrivacyPolicyPage
