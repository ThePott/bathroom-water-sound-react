import { useState } from "react"
import Modal from "../../../Modal/Modal"
import { checkIsKorean } from "../../../shared/utiles/detect-language"

const translations = {
    "app.title": {
        ko: "화장실 물소리",
        en: "Bathroom Sound",
    },
    "support.title": {
        ko: "문의하기",
        en: "Support",
    },
    "support.placeholder.name": {
        ko: "이름",
        en: "Name",
    },
    "support.placeholder.email": {
        ko: "이메일",
        en: "Email",
    },
    "support.placeholder.content": {
        ko: "문의하실 내용을 적어주세요",
        en: "Write your message here",
    },
    "support.button": {
        ko: "보내기",
        en: "Submit",
    },
    "modal.title": {
        ko: "접수되었어요",
        en: "Submitted",
    },
    "modal.content": {
        ko: "확인하는 대로 답변드릴게요",
        en: "We will reply as soon as we check it",
    },
    "modal.button": {
        ko: "확인",
        en: "Confirm",
    },
}

type DefaultInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input = (props: DefaultInputProps) => {
    const { className: _className, ...rest } = props
    return (
        <input
            {...rest}
            className="transition w-full px-[12px] py-[8px] outline outline-[#C5C8C5] focus:outline-1 focus:outline-[#666666] rounded-[12px]"
        />
    )
}

type DefaultTextareaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>
const Textarea = (props: DefaultTextareaProps) => {
    const { className: _className, ...rest } = props
    return (
        <textarea
            {...rest}
            className="transition w-full px-[12px] py-[8px] outline outline-[#C5C8C5] focus:outline-1 focus:outline-[#666666] rounded-[12px] resize-none"
        />
    )
}
const BathroomWaterSupportPage = () => {
    const [isModalOn, setIsModalOn] = useState(false)

    const isKorean = checkIsKorean()
    const translate = (key: string): string => {
        return translations[key][isKorean ? "ko" : "en"]
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsModalOn(true)
    }
    return (
        <>
            <div
                title="fullscreen"
                className="min-h-screen max-h-screen w-screen flex justify-center items-center overflow-auto scrollbar-gutter-auto bg-[EAEAEA]"
            >
                <div
                    title="container"
                    className="w-[600px] h-full mx-auto bg-[EAEAEA] p-[48px] rounded-[48px] text-center shadow-2xl border-t-2 border-t-white"
                >
                    <div title="vstack" className="flex flex-col gap-[24px]">
                        <h1 className="text-[24px] font-semibold">{translate("app.title")}</h1>
                        <h2 className="font-semibold">{translate("support.title")}</h2>
                        <form onSubmit={handleSubmit}>
                            <div title="vstack" className="flex flex-col gap-[12px]">
                                <Input placeholder={translate("support.placeholder.name")} />
                                <Input placeholder={translate("support.placeholder.email")} />
                                <Textarea placeholder={translate("support.placeholder.content")} rows={6} />
                                <button className="cursor-pointer transition px-[12px] py-[8px] bg-[#282C33] hover:bg-black text-[#EAEAEA] rounded-[12px]">
                                    {translate("support.button")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal isOn={isModalOn} onBackdropClick={() => setIsModalOn(false)}>
                <div className="flex flex-col gap-[24px]" onClick={(event) => event.stopPropagation()}>
                    <h2 className="font-semibold">{translate("modal.title")}</h2>
                    <p>{translate("modal.content")}</p>
                    <button
                        className="cursor-pointer transition px-[12px] py-[8px] bg-[#282C33] hover:bg-black text-[#EAEAEA] rounded-[12px]"
                        onClick={() => setIsModalOn(false)}
                    >
                        {translate("modal.button")}
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default BathroomWaterSupportPage
