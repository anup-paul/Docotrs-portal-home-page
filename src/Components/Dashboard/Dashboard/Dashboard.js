import React, { useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../Sidebar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const containerStyle = {
    backgroundColor:"lightblue",
    height:"100%"
}

const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [appointmentsDate, setAppointmentsDate] = useState([]);  //get array so initial declear sate empty array

    const handleDateChange = date =>{
        // console.log(date);
        setSelectedDate(date);

        fetch('http://localhost:7000/addAppointmentsByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointmentsDate(data))
    }

   

    return (
        <main>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointmentsDate={appointmentsDate} ></AppointmentsByDate>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;