import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../Sidebar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import './Dashboard.css'





const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [appointmentsDate, setAppointmentsDate] = useState([]);  //get array so initial declear sate empty array

    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:7000/addAppointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointmentsDate(data));
    }, [selectedDate])

    console.log(loggedInUser.email);

    return (
        <main>
            <div className="container-fluid row">
                <div className="col-md-2" style={{ backgroundColor: "#18D3B5", height: "100vh" }}>
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                    <div className="calender-design m-5" >
                        <Calendar
                            
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointmentsDate={appointmentsDate} ></AppointmentsByDate>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;