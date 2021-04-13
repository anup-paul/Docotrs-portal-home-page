import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeApponiment.css'

const MakeAppoinment = () => {
    return (
        <section className="pt-5 mx-5" >
            <div className="make-appointment">
                <div className="container">
                    <div className="row  ">
                        <div className="col-md-5 d-none d-md-block ">
                            <img className="img-fluid" src={doctor} alt="" />
                        </div>
                        <div className="col-md-7 text-white py-5 info-details">
                            <h5 style={{ color: "#1CC7C1" }}>Appointment</h5>
                            <h1>Make an appointment <br /> today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo eligendi voluptate architecto, debitis consectetur?</p>
                            <button style={{backgroundColor:"#11D0DC"}} className="btn" >Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;