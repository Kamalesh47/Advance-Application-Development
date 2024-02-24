import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../assets/css/Cancel.css";
import axios from 'axios';
import AdminNav from '../components/AdminNav';

export default function View() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8082/getBooking", {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            setUsers(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        console.log(response.data);
    };

    
    return (
      <>
      <AdminNav/>
        <div className="table-container">
            <h1 style={{textAlign:"center"}}>View Booking</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Applicant Name</th>
                        <th>Event Name</th>
                        <th>Applicant Address</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Number of People</th>
                        <th>Food Type</th>
                        <th>Addons</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.eventname}</td>
                            <td>{user.address}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>{user.numberofperson}</td>
                            <td>{user.food}</td>
                            <td>{user.add_ons && user.add_ons.join(", ")}</td>
                            <td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}