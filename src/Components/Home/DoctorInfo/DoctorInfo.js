import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core';

const DoctorInfo = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="text-center" >
                <img  className="img-fluid" src={data.img} alt=""/>
                <h6 className="mt-3 mb-3"><b>{data.name}</b></h6>
                <div className="d-flex justify-content-center" >
                    <FontAwesomeIcon icon={data.icon} style={{color:"#1CC7C1"}} ></FontAwesomeIcon>
                    <h6 className="ms-2" >{data.number}</h6>
                </div>
            </div>
            
        </div>
    );
};

export default DoctorInfo;