import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './AdminViewUser.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


function AdminViewUser() {
    const navigate=useNavigate()
    const [user, setUser] = useState([])

    useEffect(() => {
        async function getUsers() {
            const userData = await axios.get('http://localhost:5000/admin/getUser', { withCredentials: true })
            if (userData.data.status === true) {
                setUser(userData.data.users)
            }
        }
        getUsers()
    }, [])

    const editUser = (userId,username,email,mobile) => {
        navigate('/admin/edit-users',{state:{_id:userId,name:username,email:email,mobile:mobile}})

    }

    const deleteUser = async (userId) => {
        console.log(userId,"ihhhh");
        const dltUser = await axios.post('http://localhost:5000/admin/deleteUser', { userId: userId }, { withCredentials: true })
        if (dltUser.data.status === true) {
            const newUsers = user.filter((element) => element._id !== userId)
            setUser(newUsers)
        }
    }




    return (
        <React.Fragment>
            <div className='container'>
                <div className='content'>
                    <h3 style={{ textAlign: 'center' }}>Users</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {user.map((obj, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.mobile}</td>
                                        <td><Button variant="success" onClick={() => { editUser( obj._id,obj.name,obj.email,obj.mobile) }} style={{ marginRight: 10 }}>Edit</Button><Button variant="danger" onClick={() => { deleteUser( obj._id) }} >Delete</Button></td>

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

export default AdminViewUser
