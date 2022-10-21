import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

function AdminEditUser() {
    const location = useLocation()
    const navigate = useNavigate()
    const useId = location.state._id
    const [formData, setFormData] = useState({
        name: location.state.name,
        email: location.state.email,
        mobile: location.state.mobile

    })

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://localhost:5000/admin/userEdit', { formData, useId }, { withCredentials: true })
        if (response.data.status === true) {
            navigate('/admin/view-users')
        } else {
            console.log("user detail not updated")
        }
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-6 mt-5'>
                        <h2 className='head'>Edit User</h2>
                        <div className=''>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange} defaultValue={location.state.name} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" name='email' onChange={handleChange} defaultValue={location.state.email} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter mobile number" name='mobile' onChange={handleChange} defaultValue={location.state.mobile} />
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

export default AdminEditUser
