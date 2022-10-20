import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeBody.css'


function HomeBody() {
  const navigate=useNavigate()
  return (
    <div>
      <div className='background'>
        <div className='heading'>
          <h1 >Welcome</h1>
         <u> <h3 style={{color:'blue',cursor:'pointer'}} onClick={()=>navigate("/event-register")}>Register for startup meetup</h3></u>
        </div>
      </div>
    </div>
  )
}

export default HomeBody
