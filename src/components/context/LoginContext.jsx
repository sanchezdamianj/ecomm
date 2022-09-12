import { createContext, useContext, useState } from "react";
import swal from 'sweetalert';


export const LoginContext = createContext()

const users = [
    {
        email: 'dami@mail.com',
        password: '1'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: '',
        logged: false
    })

    const login = (values) => {
        const match = users.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.password) {
                setUser({
                    user: match.email,
                    logged: true
                })

            } else {
                swal("Wrong password", "Try again!", "error", {
                    button: "Try again!",
                  });
            }
        } else {
            swal("Wrong email", "Try again!", "error", {
                button: "Try again!",
              });
        }
    }
    const logOut = () => {
        setUser({
            user: '',
            logged: false
        })
    }
    return (
        <LoginContext.Provider value={{user, login, logOut}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}