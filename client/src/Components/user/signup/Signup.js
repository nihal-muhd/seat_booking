import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  })

  const { name, email, mobile, password } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = await axios.post('http://localhost:5000/signup', formData)
    if (data) {
      navigate("/login")
    }

  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row d-flex justify-content-center '>
          <div className='col-6 mt-5'>
            <h2 className='head'>Signup</h2>
            <div className=''>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange} value={name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' value={email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter mobile number" onChange={handleChange} name='mobile' value={mobile} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={password} />
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

export default Signup

