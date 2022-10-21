import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './AdminViewApplication.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function AdminViewApplication() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function getApplication() {
      const { data } = await axios.get('http://localhost:5000/admin/getApplications', { withCredentials: true })
      if (data.status === true) {
        setApplications(data.applications)
      }
    }
    getApplication()
  }, [])

  const changeStatus = async (value, userId) => {
    const status = await axios.post('http://localhost:5000/admin/changeStatus', { status: value, userId: userId }, { withCredentials: true })
    if (status.data.status === true) {
      const newApplication = applications.filter((element) => element._id !== userId)
      setApplications(newApplication)
    }
  }
  return (
    <React.Fragment>
      <div className='container'>
        <div className='content'>
          <h3 style={{ textAlign: 'center' }}>New Applications</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>Company Product</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((obj, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td >{obj.application.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.application.mobile}</td>
                    <td>{obj.application.CompanyName}</td>
                    <td>{obj.application.companyProduct}</td>
                    <td>{obj.application.address}</td>
                    <td><Button variant="success" onClick={() => { changeStatus("accept", obj._id) }} style={{ marginRight: 10 }}>Accept</Button><Button variant="danger" onClick={() => { changeStatus("reject", obj._id) }} >Reject</Button></td>
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

export default AdminViewApplication
