import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';


const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date =>{
        // console.log(date);
        setSelectedDate(date);
    }

    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange} ></AppointmentHeader>
            <BookingAppointment date = {selectedDate} ></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;