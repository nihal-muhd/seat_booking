import React, { useEffect } from 'react'
import AdminRejectedApp from '../../Components/admin/Applications/AdminRejectedApp'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AdminRejectedPage() {
  const navigate = useNavigate()
  const [cookie, setCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = () => {
      if (!cookie.adminjwt) {
        navigate('/admin/login')
      } else {
        console.log("rejected application")
      }
    }
    verifyUser()
  })
  return (
    <div>
      <AdminRejectedApp />
    </div>
  )
}

export default AdminRejectedPage
