import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './AdminRejectedApp.css'


function AdminRejectedApp() {
    const [applications, setApplications] = useState([])

    useEffect(() => {
        async function getApplication() {
            const approved = await axios.get('http://localhost:5000/admin/rejectedApplication', { withCredentials: true })
        
            if (approved.data.status === true) {
                setApplications(approved.data.application)
            }
        }
        getApplication()
    }, [])

    return (
        <React.Fragment>
            <div className='container'>
                <div className='content'>
                    <h3 style={{ textAlign: 'center' }}>Rejected Applications</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company Name</th>
                               
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
export default AdminRejectedApp
