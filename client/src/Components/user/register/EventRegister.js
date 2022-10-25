import axios from 'axios';
import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../../Context/UserAuthContext'
import './EventRegister.css'
import HomeNavbar from '../home/HomeNavbar';

function EventRegister() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserAuthContext)
    console.log(user,"numbers")
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        CompanyName: '',
        TeamBackground: '',
        companyProduct: ''

    })
    const { name, address, mobile, CompanyName, TeamBackground, companyProduct } = formData
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://localhost:5000/applicationForm', formData, { withCredentials: true })
        if (response.status === 200) {
            navigate('/')
        } else {
            console.log("application not updated")
        }
    }
    return (
        <React.Fragment>
            <HomeNavbar />
            {user.form ?
                <>
                    <div className='container'>
                        <div className='status'>

                            <h2> Application {user.formStatus}</h2>
                            <h3>{user.seatNumber ? user.seatNumber : ''}</h3>
                        </div>
                    </div>
                </>
                :
                <div className='container'>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-6 mt-5'>

                            <h2 className='head'>Enter Your Startup details</h2>
                            <div className=''>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange} value={name} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address" name='address' value={address} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter mobile number" name='mobile' value={mobile} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCompany">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" placeholder="Company Name" name='CompanyName' onChange={handleChange} value={CompanyName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicTeam">
                                        <Form.Label>Describe your team and background</Form.Label>
                                        <Form.Control as="textarea" name='TeamBackground' value={TeamBackground} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicProducts">
                                        <Form.Label>Describe your comapany and products</Form.Label>
                                        <Form.Control as="textarea" name='companyProduct' value={companyProduct} onChange={handleChange} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </React.Fragment>
    )
}

export default EventRegister
