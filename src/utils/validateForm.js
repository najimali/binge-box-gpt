import { regex } from "./constant"

export const validateFormFields = ({ email, password }) => {

    const isEmailValid = regex.email.test(email);
    if (!isEmailValid) {
        return "Email is not valid.";
    }
    const isPasswordValid = regex.password.test(password)
    if (!isPasswordValid) {
        return "Password is not strong."
    }
    return null
}