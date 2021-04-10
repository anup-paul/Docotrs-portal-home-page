import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex info-container justify-content-center info-${info.background} `}>
                <div className="me-4" >
                    <FontAwesomeIcon className="icon-info" icon={info.icon} ></FontAwesomeIcon>
                </div>
                <div >
                    <h6>{info.tittle}</h6>
                    <p><small>{info.description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;