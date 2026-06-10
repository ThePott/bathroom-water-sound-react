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
const App = () => {
    return (
        <div
            title="fullscreen"
            className="min-h-screen max-h-screen w-screen flex justify-center items-center  overflow-auto scrollbar-gutter-auto bg-[EAEAEA]"
        >
            <div
                title="container"
                className="w-[600px] h-full mx-auto bg-[EAEAEA] p-[48px] rounded-[48px] text-center shadow-2xl border-t-2 border-t-white"
            >
                <div title="vstack" className="flex flex-col gap-[24px]">
                    <h1 className="text-[24px] font-semibold">화장실 물소리</h1>
                    <h2 className="font-semibold">문의사항</h2>
                    <p>질문이나 건의사항을 자유롭게 적어주세요</p>
                    <form>
                        <div title="vstack" className="flex flex-col gap-[12px]">
                            <Input placeholder="이름" />
                            <Input placeholder="이메일" />
                            <Textarea placeholder="메시지" rows={6} />
                            <button className="transition px-[12px] py-[8px] bg-[#282C33] hover:bg-black text-[#EAEAEA] rounded-[12px]">
                                보내기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
