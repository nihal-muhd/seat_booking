import React, { useEffect } from 'react'
import AdminBody from '../../Components/admin/Home/AdminBody'
import AdminHeader from '../../Components/admin/Home/AdminHeader'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function AdminHomePage() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.adminjwt) {
        navigate('/admin/login')
      } else {
        console.log("admin home")
      }
    }
    verifyUser()
  })
  const logOut = () => {
    removeCookie('adminjwt')
    navigate('/admin/login')
  }
  return (
    <div>
      <AdminHeader logOut={logOut} />
      <AdminBody />
    </div>
  )
}

export default AdminHomePage
