const checkEnvVar = (envVar: string | undefined, label: string): string => {
    if (!envVar) {
        throw new Error(`---- MISSING ENV VAR: ${String(label)}`)
    }

    return envVar
}

export const VITE_EMAIL_SERVICE_ID = checkEnvVar(import.meta.env.VITE_EMAIL_SERVICE_ID, "VITE_EMAIL_SERVICE_ID")
export const VITE_EMAIL_TEMPLATE_ID_ENGLISH = checkEnvVar(
    import.meta.env.VITE_EMAIL_TEMPLATE_ID_ENGLISH,
    "VITE_EMAIL_TEMPLATE_ID_ENGLISH",
)
export const VITE_EMAIL_TEMPLATE_ID_TO_ME = checkEnvVar(
    import.meta.env.VITE_EMAIL_TEMPLATE_ID_TO_ME,
    "VITE_EMAIL_TEMPLATE_ID_TO_ME",
)
export const VITE_EMAIL_PUBLIC_ID = checkEnvVar(import.meta.env.VITE_EMAIL_PUBLIC_ID, "VITE_EMAIL_PUBLIC_ID")
