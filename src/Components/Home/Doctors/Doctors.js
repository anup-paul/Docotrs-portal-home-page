import React from 'react';
import Doctor from '../../../images/doctor-sm.png';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import DoctorInfo from '../DoctorInfo/DoctorInfo';


const DoctorsData = [
    {
        img:Doctor,
        name:'DR.Akram Hossein',
        icon:faPhoneAlt,
        number:'01676564774'
    },
    {
        img:Doctor,
        name:'DR.Zahid Bhubon',
        icon:faPhoneAlt,
        number:'01923774774'
    },
    {
        img:Doctor,
        name:'DR.Durjoy Roy',
        icon:faPhoneAlt,
        number:'01824564774'
    }
]

const Doctors = () => {
    return (
        <section>
            <div className="text-center" >
                <h6 style={{color:"#1CC7C1"}}><b>Our Doctors</b></h6>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5" >
                    {
                        DoctorsData.map(data =><DoctorInfo data = {data} ></DoctorInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;