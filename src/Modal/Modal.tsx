import { AnimatePresence } from "motion/react"
import type { ReactNode } from "react"
import ModalBackdrop from "./ModalBackdrop"
import ModalContent from "./ModalContent"

type ModalProps = {
    isOn: boolean
    onBackdropClick: () => void
    children: ReactNode
}
const Modal = ({ isOn, onBackdropClick: onClickBackdrop, children }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOn && (
                <ModalBackdrop onBackdropClick={onClickBackdrop}>
                    <ModalContent>{children}</ModalContent>
                </ModalBackdrop>
            )}
        </AnimatePresence>
    )
}

export default Modal
