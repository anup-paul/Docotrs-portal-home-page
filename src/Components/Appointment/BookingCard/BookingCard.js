import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({bookingInfo}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4" >
            <div className="card p-5  my-3 text-center border border-3 shadow-sm p-3 mb-5 bg-body rounded" >
                <h5 style={{color:"#1cc7c1"}} ><b>{bookingInfo.subject}</b></h5>
                <h6>{bookingInfo.visitingHour}</h6>
                <p className="text-secondary" >{bookingInfo.totalSpace} Space available </p>
                <button onClick={openModal}  style={{backgroundColor:"#1cc7c1",color:"white"}} className="btn" >BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen = {modalIsOpen} closeModal={closeModal} appointmentOn = {bookingInfo.subject} ></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;