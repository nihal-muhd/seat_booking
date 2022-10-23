import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeBody.css'
import { UserAuthContext } from '../../../Context/UserAuthContext'
import banner from './5469.jpg'
import Button from 'react-bootstrap/Button';



function HomeBody() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserAuthContext)
  return (
   
<div className='background'>
      <div className='row'>

        <div className='col-6'>
          <div className='heading'>
            {user.id ?
              <>
                <h1 >Welcome</h1>
                <p> Turn your ideas into reality</p>
                {user.form ?
                  <>
                    <u> <Button variant="warning"  style={{color:'white', cursor: 'pointer' }} onClick={() => navigate("/event-register")}><b>View Details</b></Button></u>
                  </>
                  :
                  <>
                    <u> <Button variant="warning" style={{ cursor: 'pointer' }} onClick={() => navigate("/event-register")}>Register for startup meetup</Button></u>
                  </>

                }

              </>
              :
              <>
                <h1 >Welcome</h1>
                <u><p> We build a new world</p></u>
              </>
            }

          </div>
        </div>
        <div className='col-6'>
          <div className='banner'>
          <img className='image' src={banner} alt='banner'/>
          </div>
        </div>

        </div>
      </div>
    
    
  )
}

export default HomeBody
