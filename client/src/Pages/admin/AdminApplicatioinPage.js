import React, { useEffect } from 'react'
import AdminViewApplication from '../../Components/admin/Applications/AdminViewApplication'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function AdminApplicatioinPage() {
  const navigate = useNavigate()
  const [cookie, setCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = () => {
      if (!cookie.adminjwt) {
        navigate('/admin/login')
      } else {
        console.log("applications")
      }
    }
    verifyUser()
  })
  return (
    <div>
      <AdminViewApplication />
    </div>
  )
}

export default AdminApplicatioinPage
