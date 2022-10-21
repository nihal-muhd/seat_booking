import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function AdminLogin() {
    const navigate = useNavigate()
    
    const [cookies, setCookies] = useCookies([])
    useEffect(() => {
        if (cookies.adminjwt) {
            navigate('/admin')
        }
    })

    const [formData, setFormData] = useState({
        adminId: '',
        password: ''
    })

    const { adminId, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://localhost:5000/admin/login', formData, { withCredentials: true })
        if (response.data.status === true) {
            navigate('/admin')
        } else {
            console.log("Incorrect admin details");
        }
    }

    return (
        <div>
            <React.Fragment>
                <div className='container'>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-6 mt-5'>
                            <h2 className='head'>Admin Login</h2>
                            <div className=''>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter usename" name='adminId' onChange={handleChange} value={adminId} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='password' onChange={handleChange} value={password} />
                                    </Form.Group>
                                    <Form.Group>


                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default AdminLogin
