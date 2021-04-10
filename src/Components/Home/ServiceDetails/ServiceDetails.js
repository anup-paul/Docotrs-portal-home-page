import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"70px"}} src={service.image} alt=""/>
            <h5 className="mt-4 mb-4" >{service.name}</h5>
            <p className="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint, alias nulla dolore necessitatibus quis!</p>
        </div>
    );
};

export default ServiceDetails;