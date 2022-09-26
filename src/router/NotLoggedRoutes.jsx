import Login from '../pages/Login'
import SingUp from '../pages/SingUp'
import { Routes, Route, Navigate } from 'react-router-dom'

const NotLoggedRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SingUp/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

export default NotLoggedRoutes;