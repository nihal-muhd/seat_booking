import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


function AdminHeader(props) {
    const navigate=useNavigate()

    const NewApplication=()=>{
        navigate('/admin/view-application')
    }
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer' }} >Tech Kerala Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Users</Nav.Link>
                            <NavDropdown title="Applications" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={NewApplication}>New application</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Approved application</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Rejected application</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} onClick={props.logOut} >
                                Logout
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default AdminHeader
