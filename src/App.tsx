const App = () => {
    return (
        <div
            title="fullscreen"
            className="min-h-screen max-h-screen w-screen flex justify-center items-center bg-blue-500 overflow-auto scrollbar-gutter-auto"
        >
            <div title="container" className="w-[700px] h-full   mx-auto bg-amber-300 p-[48px]">
                <div title="vstack" className="flex flex-col">
                    <h1>화장실 물소리</h1>
                    <h2>문의사항</h2>
                    <p>질문이나 건의사항을 자유롭게 적어주세요</p>
                    <form>
                        <input />
                        <input />
                        <input />
                        <input />
                        <input />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
