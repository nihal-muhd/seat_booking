import React, { useEffect } from 'react'
import AdminEditUser from '../../Components/admin/ViewUsers/AdminEditUser'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AdminEditUserPage() {
    const navigate = useNavigate()
    const [cookie, setCookie] = useCookies([])
    useEffect(() => {
        const verifyUser = () => {
            if (!cookie.adminjwt) {
                navigate('/admin/login')
            } else {
                console.log("edit user")
            }
        }
        verifyUser()
    })
    return (
        <div>
            <AdminEditUser />
        </div>
    )
}

export default AdminEditUserPage
