import React, { useEffect } from 'react'
import AdminBookSeat from '../../Components/admin/Applications/AdminBookSeat'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AdminBookSeatPage() {
    const navigate = useNavigate()
    const [cookie, setCookie] = useCookies([])
    useEffect(() => {
        const verifyUser = () => {
            if (!cookie.adminjwt) {
                navigate('/admin/login')
            } else {
                console.log("Book seat")
            }
        }
        verifyUser()
    })
    return (
        <div>
            <AdminBookSeat />
        </div>
    )
}

export default AdminBookSeatPage
