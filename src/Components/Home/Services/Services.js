import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitenning.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const servicesData = [
    {
        image: Fluoride,
        name: 'Fluoride Treatment'
    },
    {
        image: Cavity,
        name: 'Cavity Filling'
    },
    {
        image: Whitening,
        name: 'Teeth Whitening'
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5 mb-5 " >
                <h5 style={{ color: "#1CC7C1" }} >Our Services</h5>
                <h1 style={{ color: "#3A4256" }} >Services we provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 pt-5">
                    {
                        servicesData.map(service => <ServiceDetails service={service} ></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;