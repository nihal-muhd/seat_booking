import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import { UserAuthContext } from '../../../Context/UserAuthContext'



function HomeNavbar(props) {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserAuthContext)
  const [cookie, setCookie, removeCookie] = useCookies([])

  const Signin = () => {
    navigate('/signup')
  }

  const Login = () => {
    navigate('/login')
  }
  const Logout = () => {
    removeCookie('jwt')
    setUser({
      ...user,
      id: null,
      name: null,
      form: false,
      formStatus: null
    })
    navigate('/login')
  }

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>Tech Kerala</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              {user.id ?
                <>
                  <Nav.Link >
                    {user.name}
                  </Nav.Link>
                  <Nav.Link eventKey={2} onClick={Logout}>
                    Logout
                  </Nav.Link>
                </>
                :
                <>
                  <Nav.Link onClick={Signin}>
                    Signin
                  </Nav.Link>
                  <Nav.Link onClick={Login}>
                    Login
                  </Nav.Link>
                </>
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default HomeNavbar
