import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const navigate=useNavigate()
    
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

    const {email,password}=formData

    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(formData,"hiiiiloo");
        let data=await axios.post('http://localhost:5000/login',formData)
        navigate('/')
    
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
                                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={password}/>
                                </Form.Group>
                                <Form.Group>

                                <Form.Label onClick={()=>navigate("/signup")} style={{cursor:'pointer'}}>Dont have account?</Form.Label>
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
