import Login from '../components/Login'
import { Routes, Route, Navigate } from 'react-router-dom'

const NotLoggedRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

export default NotLoggedRoutes;