import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './AdminApprovedApp.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs"


function AdminApprovedApp() {
    const navigate=useNavigate()
    const [applications, setApplications] = useState([])

    useEffect(() => {
        async function getApplication() {
            const approved = await axios.get('http://localhost:5000/admin/approvedApplication', { withCredentials: true })
            console.log(approved.data.application,"approved")
            if (approved.data.status === true) {
                setApplications(approved.data.application)
            }
        }
        getApplication()
    }, [])

    const BookSeat = (userId) => {
        navigate('/admin/book-seat',{state:{userId}})
        }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='content'>
                    <h3 style={{ textAlign: 'center' }}>Approved Applications</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company Name</th>
                                <th>Seat number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {applications.map((obj, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{obj.application.name}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.application.mobile}</td>
                                        <td>{obj.application.CompanyName}</td>
                                        <td>{obj.reserveStatus?obj.seatNumber:''}</td>
                                        <td>{obj.reserveStatus?<BsFillCheckCircleFill style={{color:'green'}}/>:<Button onClick={()=>{BookSeat(obj._id)}}>Book seat</Button>}</td>

                                    </tr>
                                )
                            })}



                        </tbody>
                    </Table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminApprovedApp
