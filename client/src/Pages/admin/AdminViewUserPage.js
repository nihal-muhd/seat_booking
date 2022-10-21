import React, { useEffect } from 'react'
import AdminViewUser from '../../Components/admin/ViewUsers/AdminViewUser'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AdminViewUserPage() {
    const navigate = useNavigate()
    const [cookie, setCookie] = useCookies([])
    useEffect(() => {
        const verifyUser = () => {
            if (!cookie.adminjwt) {
                navigate('/admin/login')
            } else {
                console.log("view user")
            }
        }
        verifyUser()
    })
    return (
        <div>
            <AdminViewUser />
        </div>
    )
}

export default AdminViewUserPage
