export type AuthRegType = null | "signin" | "login" | "signup"

export interface InitialAuthStateType {
    authRegType: AuthRegType
    isForgotPassword: boolean
}