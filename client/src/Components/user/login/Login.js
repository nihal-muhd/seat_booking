import React, { useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { UserAuthContext } from '../../../Context/UserAuthContext'
import axios from 'axios';
import { useCookies } from 'react-cookie'


function Login() {
    const { user, setUser } = useContext(UserAuthContext)

    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies([])
    useEffect(() => {
        if (cookies.jwt) {
            navigate('/')
        }
    })

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://localhost:5000/login', formData, { withCredentials: true })
        console.log(response.data.username.seatNumber, "nivhuu")
        if (response.data.status === true) {
            setUser({
                ...user,
                id: response.data.userId,
                name: response.data.username.name,
                form: response.data.username.form,
                formStatus: response.data.username.applicationStatus,
                seatNumber: response.data.username.seatNumber
            })
            navigate('/')
        } else {
            setUser({
                ...user,
                id: null,
                name: null,
                form: false,
                formStatus: null,
                seatNumber: null
            })

            console.log("please enter valid passord or email");
        }



    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-6 mt-5'>
                        <h2 className='head'>Login</h2>
                        <div className=''>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={email} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={password} />
                                </Form.Group>
                                <Form.Group>

                                    <Form.Label onClick={() => navigate("/signup")} style={{ cursor: 'pointer' }}>Dont have account?</Form.Label>
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
    )
}

export default Login
