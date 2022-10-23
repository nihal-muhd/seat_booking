import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/user/HomePage'
import SignupPage from '../Pages/user/SignupPage'
import LoginPage from '../Pages/user/LoginPage'
import EventRegisterPage from '../Pages/user/EventRegisterPage'
import { UserAuthContext } from '../Context/UserAuthContext'
import axios from 'axios'



function User() {
    const { user, setUser } = useContext(UserAuthContext)

    useEffect(() => {
        async function getUsers() {
            const userData = await axios.get('http://localhost:5000/getUserData', { withCredentials: true })
            console.log(userData, "context")
            console.log(userData.data.user._id, "context")
            if (userData.data.status === true) {
                setUser({
                    ...user,
                    id: userData.data.user._id,
                    name: userData.data.user.name,
                    form: userData.data.user.form,
                    formStatus: userData.data.user.applicationStatus
                })
            } else {
                setUser({
                    ...user,
                    id: null,
                    name: null,
                    form: false,
                    formStatus: null
                })
            }
        }
        getUsers()
    }, [])

    return (
        <div>
            <Routes>
                <Route element={<SignupPage />} path='/signup' />
            </Routes>
            <Routes>
                <Route element={<LoginPage />} path='/login' />
            </Routes>

            <Routes>
                <Route element={<HomePage />} path='/' />
            </Routes>
            <Routes>
                <Route element={<EventRegisterPage />} path='/event-register' />
            </Routes>


        </div>
    )
}

export default User
