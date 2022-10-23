import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminHomePage from '../Pages/admin/AdminHomePage'
import AdminLoginPage from '../Pages/admin/AdminLoginPage'
import AdminApplicatioinPage from '../Pages/admin/AdminApplicatioinPage'
import AdminViewUserPage from '../Pages/admin/AdminViewUserPage'
import AdminEditUserPage from '../Pages/admin/AdminEditUserPage'
import AdminAprovedPage from '../Pages/admin/AdminAprovedPage'
import AdminRejectedPage from '../Pages/admin/AdminRejectedPage'
import AdminBookSeatPage from '../Pages/admin/AdminBookSeatPage'



function Admin() {
    return (
        <div>
            <Routes>
                <Route element={<AdminLoginPage />} path='/login' />
            </Routes>
            <Routes>
                <Route element={<AdminHomePage />} path='/' />
            </Routes>
            <Routes>
                <Route element={<AdminApplicatioinPage />} path='/view-application' />
            </Routes>
            <Routes>
                <Route element={<AdminViewUserPage />} path='/view-users' />
            </Routes>
            <Routes>
                <Route element={<AdminEditUserPage />} path='/edit-users' />
            </Routes>
            <Routes>
                <Route element={<AdminAprovedPage />} path='/approved-application' />
            </Routes>
            <Routes>
                <Route element={<AdminRejectedPage />} path='/rejected-application' />
            </Routes>
            <Routes>
                <Route element={<AdminBookSeatPage />} path='/book-seat' />
            </Routes>





        </div>
    )
}

export default Admin
