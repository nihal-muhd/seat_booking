import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeBody.css'
import { UserAuthContext } from '../../../Context/UserAuthContext'


function HomeBody() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserAuthContext)
  return (
    <div>
      <div className='background'>
        <div className='heading'>
          {user.id ?
            <>
              <h1 >Welcome</h1>
              {user.form ?
                <>
                  <u> <h3 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate("/event-register")}>View application status</h3></u>
                </>
                :
                <>
                 <u> <h3 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate("/event-register")}>Register for startup meetup</h3></u>
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
    </div>
  )
}

export default HomeBody
