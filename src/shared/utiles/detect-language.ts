export const getLanguage = () => {
    const userLanguage = navigator.languages?.[0] || navigator.language || "en"
    return userLanguage
}

export const checkIsKorean = () => {
    const userLanguage = getLanguage()
    return ["ko", "KR", "ko-KR"].includes(userLanguage)
}
