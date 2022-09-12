import React from 'react'
import { BrowserRouter} from "react-router-dom"
import { useLoginContext } from "../components/context/LoginContext"
import LoggedRoutes from "./LoggedRoutes"
import NotLoggedRoutes from "./NotLoggedRoutes"

const AppRoutes = () => {
    const {user} = useLoginContext()

    return (
        <BrowserRouter>
            {
            user.logged
                ? <LoggedRoutes/>
                : <NotLoggedRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRoutes