import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EventRegister from '../../Components/user/register/EventRegister'
import { useCookies } from 'react-cookie'


function EventRegisterPage() {
  const navigate = useNavigate()
  const [cookie, setCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = () => {
      if (!cookie.jwt) {
        navigate('/login')
      } else {
        console.log("application form")
      }
    }
    verifyUser()
  })
  return (
    <div>
      <EventRegister />
    </div>
  )
}

export default EventRegisterPage
