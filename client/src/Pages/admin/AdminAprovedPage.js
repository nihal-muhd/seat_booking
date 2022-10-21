import React, { useEffect } from 'react'
import AdminApprovedApp from '../../Components/admin/Applications/AdminApprovedApp'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AdminAprovedPage() {
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
            <AdminApprovedApp />
        </div>
    )
}

export default AdminAprovedPage
