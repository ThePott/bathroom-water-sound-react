import type { ReactNode } from "react"

export type ModalContentProps = {
    children: ReactNode
}

const ModalContainer = ({ children }: ModalContentProps) => {
    return (
        <div
            style={{ backdropFilter: "blur(48px)" }}
            className="w-[400px] mx-auto p-[48px] rounded-[48px] text-center shadow-2xl border-t-2 border-t-white bg-[#EAEAEA]/60"
        >
            {children}
        </div>
    )
}

export default ModalContainer
