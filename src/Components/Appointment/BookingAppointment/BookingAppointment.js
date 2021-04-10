import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id:1,
        subject:'Teeth OrthoDontics',
        visitingHour:'8.00 AM - 11 AM',
        totalSpace:10
    },
    {
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHour:'9.00 AM - 1.00 PM',
        totalSpace:10
    },
    {
        id:3,
        subject:'Teeth Cleaning',
        visitingHour:'8.00 AM - 11 AM',
        totalSpace:10
    },
    {
        id:4,
        subject:'Cavity Protection',
        visitingHour:'9.00 AM - 1.00 PM',
        totalSpace:10
    },
    {
        id:5,
        subject:'Teeth OrthoDontics',
        visitingHour:'8.00 AM - 11 AM',
        totalSpace:10
    },
    {
        id:6,
        subject:'Teeth OrthoDontics',
        visitingHour:'9.00 AM - 1.00 PM',
        totalSpace:10
    }
]

const BookingAppointment = ({date}) => {
    return (
        <section>
            <div className="mt-5" >
                <h2 style={{color:"#1cc7c1"}} className="text-center" ><b>Available Appointments on {date.toDateString()}</b></h2>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5" >
                <div className="row w-75 " >
                    {
                        bookingData.map(data => <BookingCard bookingInfo={data} ></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingAppointment;