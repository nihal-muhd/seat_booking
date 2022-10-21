import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminHomePage from '../Pages/admin/AdminHomePage'
import AdminLoginPage from '../Pages/admin/AdminLoginPage'


function Admin() {
    return (
        <div>
            <Routes>
                <Route element={<AdminLoginPage />}   path='/login' />
            </Routes>
            <Routes>
                <Route  element={<AdminHomePage />}   exact path='/' />
            </Routes>


        </div>
    )
}

export default Admin
