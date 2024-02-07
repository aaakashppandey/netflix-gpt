export const checkValidData=(email, password)=> {
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isValidEmail) return "Please Enter valid email."
    if(!isValidPassword) return "Please enter valid password."

    return null
}