import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/user/HomePage'
import SignupPage from '../Pages/user/SignupPage'
import LoginPage from '../Pages/user/LoginPage'
import EventRegisterPage from '../Pages/user/EventRegisterPage'

function User() {
    return (
        <div>
            <Routes>
                <Route element={<HomePage />} path='/' />
            </Routes>
            <Routes>
                <Route element={<SignupPage />} path='/signup' />
            </Routes>
            <Routes>
                <Route element={<LoginPage />} path='/login' />
            </Routes>
            <Routes>
                <Route element={<EventRegisterPage />} path='/event-register' />
            </Routes>

        </div>
    )
}

export default User
