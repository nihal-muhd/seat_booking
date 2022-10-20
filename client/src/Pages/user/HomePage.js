import React, { useEffect } from 'react'
import HomeNavbar from '../../Components/user/home/HomeNavbar'
import HomeBody from '../../Components/user/home/HomeBody'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'



function HomePage() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate('/login')
      } else {
        console.log("hii")
      }
    }
    verifyUser()
  })
  const logOut = () => {
    removeCookie('jwt')
    navigate('/login')
  }
  return (
    <div>

      <HomeNavbar logOut={logOut} />
      <HomeBody />
    </div>
  )
}

export default HomePage
