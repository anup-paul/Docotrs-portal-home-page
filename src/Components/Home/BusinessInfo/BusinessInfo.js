import React from 'react';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        tittle: "Opening hours",
        description: "we are open 7 days",
        icon: faClock,
        background: 'primary'
    },
    {
        tittle: "Visit our location",
        description: "4/A,Dhanmondi",
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        tittle: "Contract us now",
        description: "01676203828",
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center" >
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;