import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EventRegister() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-6 mt-5'>
                        <h2 className='head'>Enter Your Startup details</h2>
                        <div className=''>
                            <Form className=''>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" name='email' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter mobile number" name='mobile' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCompany">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Company Name" name='Company-Name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicLogo">
                                    <Form.Label>Company Logo</Form.Label>
                                    <Form.Control type="file" name='Company-Logo' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicTeam">
                                    <Form.Label>Describe your team and background</Form.Label>
                                    <Form.Control as="textarea" name='Team-Background' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicProducts">
                                    <Form.Label>Describe your comapany and products</Form.Label>
                                    <Form.Control as="textarea" name='company-products' />
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

export default EventRegister
