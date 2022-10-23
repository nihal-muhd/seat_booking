import React, { useEffect, useState } from 'react'
import './AdminBookSeat.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminBookSeat() {
    const navigate = useNavigate()
    const location = useLocation()
    const userId = location.state.userId
    const [reservedSeat, setReservedSeat] = useState([])

    let data = []
    for (let i = 0; i < reservedSeat.length; i = i + 6) {
        let part_slice = reservedSeat.slice(i, i + 6)
        data.push(part_slice)

    }


    useEffect(() => {
        async function getSeats() {
            const bookedSeat = await axios.get('http://localhost:5000/admin/getSeats', { withCredentials: true })
            if (bookedSeat.data.status === true) {
                setReservedSeat(bookedSeat.data.seats)
            }
        }
        getSeats()
    }, [])


    const reserve = async (seatId, seatno, userId) => {
        const seat = await axios.post('http://localhost:5000/admin/bookSeat', { seatId, seatno, userId }, { withCredentials: true })
        console.log(seat, "booking")
        if (seat.data.status === true) {
            navigate('/admin/approved-application')
        }
    }
    return (
        <React.Fragment>
            <div className='container'>
                <div className='content'>
                    <h3 style={{ textAlign: 'center' }}>Book Seat</h3>
                    <Table hover>
                        <thead >
                            <tr>
                                <th>Row</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d) => {
                                return (
                                    <tr >
                                        <td>{d[0].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[0].seatno}</Button> : <Button variant="success" onClick={() => { reserve(d[0]._id, d[0].seatno, userId) }}>{d[0].seatno}</Button>}</td>
                                        <td>{d[1].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[1].seatno}</Button> : <Button variant="success" onClick={() => { }}>{d[1].seatno}</Button>}</td>
                                        <td>{d[2].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[2].seatno}</Button> : <Button variant="success" onClick={() => { }}>{d[2].seatno}</Button>}</td>
                                        <td>{d[3].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[3].seatno}</Button> : <Button variant="success" onClick={() => { }}>{d[3].seatno}</Button>}</td>
                                        <td>{d[4].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[4].seatno}</Button> : <Button variant="success" onClick={() => { }}>{d[4].seatno}</Button>}</td>
                                        <td>{d[5].status ? <Button variant="secondary" onClick={() => { window.alert("Seat have been booked") }}>{d[5].seatno}</Button> : <Button variant="success" onClick={() => { }}>{d[5].seatno}</Button>}</td>
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

export default AdminBookSeat
